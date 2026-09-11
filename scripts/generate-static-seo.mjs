// Post-build SEO script.
//
// WHY THIS EXISTS:
// This site is a client-side rendered (CSR) Vite + React SPA. `SEOHead.tsx`
// updates <title>/meta tags via useEffect AFTER React mounts. That's fine for
// Googlebot (it executes JS), but most social-share bots (LinkedIn, Twitter,
// WhatsApp, Slack, Discord...) and some SEO crawlers do NOT execute JS — they
// only read the raw HTML returned for a given URL. Right now every route
// returns the SAME index.html with the homepage's title/description/og:image,
// so sharing a project link shows the homepage preview instead of that
// project's own title/description/image.
//
// WHAT THIS SCRIPT DOES:
// After `vite build` finishes, this script takes the already-built
// dist/index.html (which has the correct hashed <script>/<link> tags for the
// JS/CSS bundles) and writes a copy of it into a per-route folder
// (e.g. dist/about/index.html, dist/work/bakrey-crm/index.html) with just the
// <title>, meta description/OG/Twitter tags, canonical link, and a JSON-LD
// block swapped in for that specific route.
//
// IMPORTANT: This does NOT render any React component and does NOT touch any
// .tsx/.ts source file. The generated HTML boots the exact same JS bundle as
// before, so once the page loads in a real browser, React/React Router takes
// over completely and renders the page exactly as it always has — animations,
// layout, everything unchanged. This purely helps crawlers/bots that read the
// raw HTML before JS runs.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const siteUrl = 'https://hamzanasir.vercel.app';

const baseHtml = readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// --- Extract project data straight from the TS source (single source of
// truth — nothing here is duplicated by hand, so it can't drift out of sync
// with projectsData.ts as projects are added/edited). ---
const projectsSrc = readFileSync(path.join(root, 'src/data/projectsData.ts'), 'utf-8');

function extractProjects(src) {
  const projects = [];
  const startMarker = 'export const PROJECTS_DATA: Project[] = [';
  const startIdx = src.indexOf(startMarker);
  const endIdx = src.indexOf('\n];', startIdx);
  const arrayBody = src.slice(startIdx + startMarker.length, endIdx);

  // Each project object starts at a line that is exactly "  {" (two-space
  // indent). Splitting on that boundary is robust against comment lines
  // between objects, which broke a lookahead-based approach.
  const blocks = arrayBody.split(/\n {2}\{\n/).slice(1);

  for (const block of blocks) {
    const get = (key) => {
      const m = block.match(new RegExp(`${key}: '([^']*)'`));
      if (m) return m[1];
      const m2 = block.match(new RegExp(`${key}: "((?:[^"\\\\]|\\\\.)*)"`));
      return m2 ? m2[1].replace(/\\"/g, '"') : '';
    };
    const slug = get('slug');
    if (!slug) continue;
    projects.push({
      slug,
      title: get('title'),
      subtitle: get('subtitle'),
      image: get('image'),
      ogImage: get('ogImage') || get('image'),
    });
  }
  return projects;
}

const projects = extractProjects(projectsSrc);

// --- Static route metadata, kept identical to each page's <SEOHead> props
// so the no-JS snapshot matches what React renders once it hydrates. ---
const staticRoutes = [
  {
    route: '/about',
    title: 'About Hamza Nasir — 1.5 yrs Frontend Dev / 3 yrs Tech Field',
    description: 'Learn about Hamza Nasir: 1.5 years of professional frontend development experience, 3 years total in the tech/software field (development + instruction).',
  },
  {
    route: '/work',
    title: 'Selected Works & Case Studies — Hamza Nasir Portfolio',
    description: 'Explore real freelance client projects and personal software projects built with Next.js, React, PHP, MySQL, MongoDB, and GSAP by Hamza Nasir.',
  },
  {
    route: '/services',
    title: 'Services & Engineering Capabilities — Hamza Nasir',
    description: 'Full-stack Web Architecture, Next.js / React Frontend Development, PHP 8 CMS Platforms, and GSAP Cinematic UI engineering.',
  },
  {
    route: '/contact',
    title: 'Contact Hamza Nasir — Initiate Project Inquiries & Contracting',
    description: 'Get in touch with Hamza Nasir for freelance project inquiries, full-stack software development, and technical consulting. Email: hn626309@gmail.com, Phone: +92 316-2013553.',
  },
];

function setTag(html, regex, replacement) {
  return regex.test(html) ? html.replace(regex, replacement) : html;
}

function buildHtmlForRoute({ url, title, description, ogImage, jsonLd }) {
  let html = baseHtml;

  html = setTag(html, /<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  html = setTag(html, /<meta name="description" content=".*?" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`);
  html = setTag(html, /<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  html = setTag(html, /<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  html = setTag(html, /<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${url}" />`);
  html = setTag(html, /<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${ogImage}" />`);
  html = setTag(html, /<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  html = setTag(html, /<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  html = setTag(html, /<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${ogImage}" />`);

  // Canonical link — add if missing, replace if present
  if (/<link rel="canonical"[^>]*\/>/.test(html)) {
    html = html.replace(/<link rel="canonical"[^>]*\/>/, `<link rel="canonical" href="${url}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${url}" />\n  </head>`);
  }

  // Route-specific JSON-LD, injected right before </head>
  if (jsonLd) {
    html = html.replace('</head>', `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`);
  }

  return html;
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function writeRouteHtml(routePath, html) {
  const dir = path.join(distDir, routePath);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
}

let count = 0;

// Static routes
for (const r of staticRoutes) {
  const url = `${siteUrl}${r.route}`;
  const html = buildHtmlForRoute({
    url,
    title: r.title,
    description: r.description,
    ogImage: `${siteUrl}/images/og/site-default-og.jpg`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl + '/' },
        { '@type': 'ListItem', position: 2, name: r.title.split(' — ')[0], item: url },
      ],
    },
  });
  writeRouteHtml(r.route, html);
  count++;
}

// Project detail routes
for (const p of projects) {
  const url = `${siteUrl}/work/${p.slug}`;
  const html = buildHtmlForRoute({
    url,
    title: `${p.title} Case Study — Hamza Nasir`,
    description: p.subtitle,
    ogImage: `${siteUrl}${p.ogImage}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: p.title,
      description: p.subtitle,
      url,
      image: `${siteUrl}${p.image}`,
    },
  });
  writeRouteHtml(`/work/${p.slug}`, html);
  count++;
}

console.log(`[generate-static-seo] wrote per-route HTML for ${count} routes (${staticRoutes.length} static + ${projects.length} projects).`);
