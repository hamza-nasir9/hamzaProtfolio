export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  projectType: 'Client Project' | 'Personal Project';
  year: string;
  client: string;
  role: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  ogImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  statusNote?: string;
  featured: boolean;
  keyFeatures: { title: string; desc: string }[];
  architecture: string[];
}

export const PROJECTS_DATA: Project[] = [
  // --- 4 REAL FREELANCE CLIENT DELIVERIES ---
  {
    id: 'bakrey-crm',
    slug: 'bakrey-crm',
    title: 'Bakrey CRM',
    subtitle: 'A modern, full-stack CRM and business management system designed to streamline customer relationships, lead tracking, and automated sales pipelines.',
    category: 'CRM / Business Management System',
    projectType: 'Client Project',
    year: '2025',
    client: 'Bakrey Systems',
    role: 'Full-Stack Architect & Lead Developer',
    description: 'Enterprise business management system managing lead tracking, client contact logs, and automated deal pipeline workflows.',
    fullDescription: "Bakrey CRM is a modern, high-performance Customer Relationship Management platform engineered to replace bloated legacy CRMs with a fast, intuitive Next.js & React 19 interface. The brief called for a system that sales teams could actually use daily without a training manual — so the build prioritizes a centralized contact directory, a visual Kanban-style pipeline, and real-time analytics over feature bloat. On the frontend, Next.js 14's App Router pairs with React 19 and Framer Motion to keep navigation between the dashboard, lead lists, and pipeline views instant and animation-smooth, while Tailwind CSS v4 handles a consistent, componentized design system across every screen. The backend runs on a Node.js REST API backed by MongoDB and Mongoose, giving the schema flexibility needed for evolving deal stages, custom lead fields, and activity logs without constant migrations. State is managed with Zustand to keep client-side data flow predictable as more modules are layered in. Core modules — contact and lead management, the visual sales pipeline, and deal tracking from first outreach to closed-won — are complete and in active use. Currently in progress are task and activity automation (follow-up reminders, email logging, activity timelines) and custom analytics and reporting (sales velocity, revenue forecasting, conversion metrics), with multi-tenant role-based access control planned next so team leads, account managers, and executives each get scoped permissions. Every part of the stack was picked for a reason rather than following a trend: MongoDB's flexible schema absorbs the pipeline's evolving stages without migrations, Zustand keeps client state simple as new modules ship, and the Vercel Edge deployment keeps the interface responsive for sales teams working across different time zones.",
    tags: ['Next.js 14', 'React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    image: '/images/bakrey-crm.jpg',
    ogImage: '/images/og/bakrey-crm-og.jpg',
    liveUrl: 'https://bakrey-crm.vercel.app/',
    statusNote: 'In Progress — Currently Building',
    featured: true,
    keyFeatures: [
      { title: 'Contact & Lead Management (Completed)', desc: 'Centralized directory for prospect profiles, interaction history, and custom field tags.' },
      { title: 'Visual Sales Pipeline (Completed)', desc: 'Interactive Kanban board tracking deal stages from initial outreach to closed won.' },
      { title: 'Task & Activity Automation (In Progress)', desc: 'Automated follow-up reminders, email logging, and activity timelines for sales reps.' },
      { title: 'Custom Analytics & Reports (In Progress)', desc: 'Real-time sales velocity charts, revenue forecasting, and lead conversion metrics.' },
      { title: 'Multi-Tenant RBAC Permissions (Planned)', desc: 'Role-based access control for team leads, account managers, and executive admins.' }
    ],
    architecture: [
      'Frontend: Next.js 14 App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion',
      'Backend & Database: Node.js REST API with MongoDB database schemas and Mongoose ORM',
      'Hosting & State: Vercel Edge runtime with Zustand state management'
    ]
  },
  {
    id: 'global-computer-institute',
    slug: 'global-computer-institute',
    title: 'Global Computer Institute Website',
    subtitle: 'Developed a modern and responsive educational website for Global Computer Institute to establish a strong online presence and simplify course inquiries.',
    category: 'Education / Institutional Website',
    projectType: 'Client Project',
    year: '2024',
    client: 'Global Computer Institute',
    role: 'Full-Stack Developer',
    description: 'Clean, user-friendly interface highlighting courses, faculty, admissions process, and contact information for Global Computer Institute.',
    fullDescription: "Global Computer Institute needed a website that could do double duty: project credibility to prospective students and their families, and cut down the number of repetitive phone calls asking about fees, schedules, and course content. The site was built on Next.js with a fully responsive, mobile-first layout, since most prospective students were browsing from their phones. Route structure was kept deliberately simple — home, courses, faculty, admissions, and contact — so visitors could find what they needed in one or two clicks rather than digging through menus. The course catalog is the centerpiece: each course gets a detailed page covering curriculum, duration, prerequisites, and fees, replacing what used to be a single static PDF or a phone conversation. Admission inquiry forms are wired directly to the admissions team's inbox, so a visitor can express interest in a course without waiting for office hours, and an embedded Google Maps integration on the contact page helps first-time visitors actually find the campus. Under the hood, a MongoDB database stores course structures and incoming inquiry submissions, giving the institute a simple way to update offerings without touching code. Styling runs on Tailwind CSS for consistency across pages, with subtle scroll animations added to keep the experience feeling modern rather than static. SEO was a specific focus from the start — proper meta tags, semantic structure, and Next.js's built-in rendering performance — since the institute's growth depends heavily on being found by people searching for computer courses in their area. The site is deployed on Vercel with automated CI/CD, so updates from the codebase go live within minutes of being pushed — and because the entire structure is course-data driven, adding a new program to the catalog is a content update rather than a development task.",
    tags: ['Next.js', 'MongoDB', 'Tailwind CSS', 'React.js', 'SEO'],
    image: '/images/global-computer-institute.jpg',
    ogImage: '/images/og/global-computer-institute-og.jpg',
    liveUrl: 'https://globalcomputer-lac.vercel.app/',
    featured: true,
    keyFeatures: [
      { title: 'Responsive & Modern UI/UX', desc: 'Mobile-first responsive layout optimized for students and faculty across all devices.' },
      { title: 'Multi-Page Website Architecture', desc: 'Structured routing for home, courses, faculty, admissions, and contact details.' },
      { title: 'Course Listing & Detailed Pages', desc: 'Comprehensive catalog detailing curriculum, duration, prerequisites, and fees.' },
      { title: 'Admission & Inquiry Forms', desc: 'Streamlined online inquiry forms connecting directly to the admissions team.' },
      { title: 'Contact & Google Maps Integration', desc: 'Embedded location maps and direct contact forms for quick location discovery.' },
      { title: 'Smooth Animations & SEO-Friendly', desc: 'Optimized meta tags and fast rendering performance built on Next.js.' }
    ],
    architecture: [
      'Frontend & SSR: Next.js App Router with Tailwind CSS styling',
      'Database: MongoDB database storing course structures and inquiry submissions',
      'Deployment: Vercel edge deployment with automated CI/CD builds'
    ]
  },
  {
    id: 'grovia-digital-agency',
    slug: 'grovia-digital-agency',
    title: 'Grovia Digital Agency Website',
    subtitle: 'Designed and developed a premium digital agency website with a modern, cinematic, visually engaging UX.',
    category: 'Agency Website / Cinematic UI',
    projectType: 'Client Project',
    year: '2024',
    client: 'Grovia Digital Agency',
    role: 'Creative Frontend Developer',
    description: 'Focused on presenting agency services, portfolio, client success stories through smooth animations and elegant layouts.',
    fullDescription: "Grovia Digital Agency wanted a website that would function like a portfolio piece in itself — the kind of site that makes a prospective client trust the agency's design instincts before a single pitch deck is opened. The brief was explicitly cinematic: smooth, deliberate motion rather than the abrupt fade-ins common on agency sites. That meant building the scroll experience around Lenis for inertia-based smooth scrolling combined with GSAP's ScrollTrigger for choreographed reveals, so sections of the page unfold in sync with how fast or slow the visitor scrolls rather than snapping into place. Every interactive element — project cards, service tiles, testimonial blocks — carries its own hover and tilt micro-interaction, built to reward exploration without slowing the page down. The information architecture spans a landing page built to hook high-ticket clients quickly, a portfolio section showcasing past agency work with zoom and tilt transitions, a services page detailing creative capabilities, and an about page establishing team ethos. React.js drives the component layer, with Next.js API routes handling backend logic and MongoDB persisting content so the agency's team can update portfolio entries without a developer. Tailwind CSS v4's design tokens keep the custom glassmorphism styling — translucent panels, soft borders, layered depth — consistent across every section instead of drifting page to page. Performance was treated as a design constraint, not an afterthought: despite the density of motion, the build targets a steady 60fps by keeping animations GPU-accelerated and avoiding layout-thrashing properties, so the \"cinematic\" feel never comes at the cost of a laggy scroll — a trade-off many agency sites get wrong by prioritizing visual spectacle over responsiveness, and one this build was specifically engineered to avoid. Every micro-interaction was profiled individually before being shipped, since a single janky hover state is enough to undercut the premium impression the entire site is built to create.",
    tags: ['React.js', 'Next.js', 'MongoDB', 'GSAP', 'Lenis', 'Tailwind CSS'],
    image: '/images/grovia-digital-agency.jpg',
    ogImage: '/images/og/grovia-digital-agency-og.jpg',
    liveUrl: 'https://groviacom.vercel.app/',
    featured: true,
    keyFeatures: [
      { title: 'Premium Landing Page Design', desc: 'High-impact visual layout built to capture prospective high-ticket agency clients.' },
      { title: 'Cinematic GSAP & Lenis Motion', desc: 'Smooth inertia scroll driven by Lenis and GSAP ScrollTrigger timelines.' },
      { title: 'Interactive Hover & Portfolio Showcase', desc: 'Card tilt and zoom micro-interactions showcasing agency case studies.' },
      { title: 'Services Showcase & About Page', desc: 'Multi-page architecture detailing creative capabilities and team ethos.' },
      { title: 'Performance-Optimized UI', desc: 'Pixel-perfect visual hierarchy maintaining fast 60fps frame rates.' }
    ],
    architecture: [
      'Frontend: React.js with GSAP and Lenis smooth scroll integration',
      'Backend: Next.js API routes with MongoDB data persistence',
      'Styling: Tailwind CSS v4 design tokens and custom glassmorphism'
    ]
  },
  {
    id: 'pulse-news-platform',
    slug: 'pulse-news-platform',
    title: 'Pulse News Platform',
    subtitle: 'Built a dynamic news management platform allowing administrators to publish, manage, and organize news articles efficiently.',
    category: 'CMS / News Platform',
    projectType: 'Client Project',
    year: '2023',
    client: 'Pulse Media Group',
    role: 'Full-Stack Developer & Database Architect',
    description: 'Includes an admin dashboard for content management with a clean, responsive interface for users to browse news.',
    fullDescription: "Pulse News Platform was built for a media team that needed to publish and manage news articles without relying on a developer for every update. The core problem was editorial speed: administrators needed a system where they could log in, write or edit an article, categorize it, attach images, and have it live on the public-facing site within minutes. That shaped the entire architecture around a custom PHP REST core handling authentication and CRUD logic, paired with a MySQL relational schema that cleanly separates articles, authors, and categories so queries stay fast even as the article count grows. Session-based admin authentication keeps the editorial dashboard secure while staying lightweight enough not to slow down the publishing workflow. The CRUD engine supports full rich-text editing for articles, and content can be organized into categories like Technology, Business, and Culture, with featured and latest-news sections surfacing trending stories automatically rather than requiring manual curation. A search and filtering system lets both admins and readers find articles instantly, and a secure media upload pipeline handles the images that accompany each story. On the public side, the interface is built with responsive HTML5 and CSS3 templates styled through Tailwind CSS, so readers get a clean, fast-loading experience on any device without the platform depending on a heavier JavaScript framework. The result is a lean, purpose-built CMS: no unnecessary plugins or bloat, just the specific publishing workflow a small newsroom actually needs, delivered and ready to go live — built to be maintained by an editorial team, not a development team. That constraint — keep it fast, keep it simple enough for non-technical staff — guided every decision from the database schema down to the admin login screen.",
    tags: ['PHP', 'MySQL', 'Tailwind CSS', 'HTML', 'CSS'],
    image: '/images/pulse-news-platform.jpg',
    ogImage: '/images/og/pulse-news-platform-og.jpg',
    statusNote: 'Delivered — Going Live Soon',
    featured: true,
    keyFeatures: [
      { title: 'Admin Authentication System', desc: 'Secure session-based admin login for content editorial workflows.' },
      { title: 'Complete News CRUD Engine', desc: 'Create, read, update, and delete news articles with rich text editing.' },
      { title: 'Category & Tag Management', desc: 'Organize articles by categories such as Technology, Business, and Culture.' },
      { title: 'Featured & Latest News Sections', desc: 'Dynamic news highlights with trending article algorithms.' },
      { title: 'Search & Image Upload Support', desc: 'Instant search filtering and secure media asset upload pipelines.' }
    ],
    architecture: [
      'Backend: Custom PHP REST core handling authentication and CRUD logic',
      'Database: MySQL relational schema for articles, authors, and categories',
      'Frontend: Responsive HTML5/CSS3 templates styled with Tailwind CSS'
    ]
  },

  {
    id: 'karachi-e-challan',
    slug: 'karachi-e-challan',
    title: 'Karachi E-Challan — Manual Verification Platform',
    subtitle: 'A full-stack manual verification platform for Karachi traffic challan requests with a secure admin workflow, MongoDB, and email-based results.',
    category: 'Full-Stack / Verification Platform',
    projectType: 'Personal Project',
    year: '2026',
    client: 'Personal Product',
    role: 'Full-Stack Developer & System Architect',
    description: 'A production-ready platform where citizens submit challan verification requests and admins manually verify results against official records before sending an email response.',
    fullDescription: "Karachi E-Challan is a full-stack verification platform built around a deliberate design choice: a human-reviewed workflow instead of automatic scraping against official traffic records. That decision shapes everything downstream. Citizens submit a request through a four-step form — vehicle details, personal information, additional context, and a final review step — with validation at every stage to keep bad or incomplete submissions from reaching the queue. Each request is stored in MongoDB Atlas via Mongoose, and authenticated admins work through a secure dashboard to manually verify each case against official records, attach private notes, record the final result, and trigger a templated email response through Resend. Because the platform handles personal and vehicle data, security was treated as a first-class concern rather than an add-on: admin sessions run on HttpOnly JWT cookies, passwords are hashed with bcrypt, and every admin route is protected with role-aware access control. Server-side rate limiting and duplicate-detection logic guard against repeated or spammy submissions within a 24-hour window, protecting both the admin queue and the platform's email sending reputation. Every outgoing email is logged with SENT/FAILED status, giving admins a visible audit trail instead of a black box — useful both for debugging delivery issues and for confirming a citizen actually received their result. Beyond the core verification flow, the platform includes an information hub covering vehicle-type fine schedules, camera locations, and step-by-step payment guides, so visitors get value from the site even before or without submitting a request. The frontend runs on React 19 with TypeScript and Vite for fast builds, Tailwind CSS v4 and Framer Motion for the interface, and React Router DOM v7 for navigation, while the backend is a Node.js Vercel Serverless Function — the whole thing is deployed and live on Vercel with GitHub-based CI/CD, not a demo or a prototype.",
    tags: ['React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Mongoose', 'JWT', 'Vercel', 'Resend'],
    image: '/images/karachi-e-challan.jpg',
    ogImage: '/images/og/karachi-e-challan-og.jpg',
    liveUrl: 'https://karachi-chalan.vercel.app',
    githubUrl: 'https://github.com/hamza-nasir9/karachi-chalan',
    statusNote: 'Production — Live',
    featured: true,
    keyFeatures: [
      { title: '4-Step Verification Request Flow', desc: 'Validated vehicle, personal, additional, and review steps for submitting challan verification requests.' },
      { title: 'Secure Admin Authentication', desc: 'HttpOnly JWT cookies, bcrypt password hashing, protected admin routes, and role-aware access.' },
      { title: 'Manual Verification Workflow', desc: 'Admins review requests manually, update status, add private notes, record results, and send responses.' },
      { title: 'Rate Limiting & Duplicate Detection', desc: 'Server-side protection limits repeated submissions and detects duplicate requests within a 24-hour window.' },
      { title: 'Email Audit Trail', desc: 'Templated Resend emails with SENT/FAILED tracking and an admin-visible history of outgoing messages.' },
      { title: 'Resource & Information Hub', desc: 'Vehicle-type fine information, camera locations, educational guides, and step-by-step payment resources.' }
    ],
    architecture: [
      'Frontend: React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, Lucide React, React Router DOM v7',
      'Backend & Database: Node.js Vercel Serverless Function, MongoDB Atlas, Mongoose, JWT, bcryptjs, HttpOnly cookies',
      'Email & Deployment: Resend API with Vercel hosting and GitHub-based CI/CD'
    ]
  },

  // --- 2 REAL PERSONAL PROJECTS ---
  {
    id: 'golf-club-template',
    slug: 'golf-club-template',
    title: 'Golf Club Website Template',
    subtitle: 'A premium responsive landing page template featuring scroll-triggered GSAP animations, elegant typography, and smooth-scroll UX.',
    category: 'Landing Page Template',
    projectType: 'Personal Project',
    year: '2024',
    client: 'Personal Creative Project',
    role: 'Frontend Developer',
    description: 'Minimalist sports club landing page template with smooth GSAP ScrollTrigger animations and responsive layout.',
    fullDescription: "This golf club landing page started as an exercise in restraint: a premium, single-page template where the motion design does most of the persuading rather than dense copy or stock-photo clutter. Built with React and Tailwind CSS, the layout leans on generous white space, refined typography, and a slow, deliberate scroll rhythm to evoke the kind of quiet luxury a golf club's actual clientele would expect. GSAP's ScrollTrigger drives every reveal on the page — headlines clip in line by line, imagery fades and scales into place, and section transitions are timed to the visitor's own scroll speed rather than firing on a fixed delay, so the experience never feels mechanical. The responsive design system was built mobile-first and tested across breakpoints so the same sense of elegance holds up whether the page is viewed on a phone or a widescreen monitor, which matters for a template meant to be reused across different club or resort brands. Because it's a personal template project rather than a client deliverable, the focus was entirely on craftsmanship: getting the easing curves right, making sure animations don't jank on lower-powered devices, and keeping the codebase clean enough that the template could be forked and re-themed quickly for a real client engagement. It's deployed on Vercel with automated CI/CD, so any refinements to the animation timing or layout ship instantly, and it now serves as a reusable base whenever a hospitality or lifestyle-brand client needs this specific cinematic, scroll-driven aesthetic — proof-of-craft that speaks for itself before a client conversation even starts. Because it began as a template rather than a fixed brief, it also doubled as a testing ground for animation techniques that later carried over into other client projects.",
    tags: ['React.js', 'Tailwind CSS', 'GSAP', 'JavaScript'],
    image: '/images/golf-club-template.jpg',
    ogImage: '/images/og/golf-club-template-og.jpg',
    githubUrl: 'https://github.com/hamza-nasir9/',
    featured: true,
    keyFeatures: [
      { title: 'Responsive Design System', desc: 'Fluid layout optimized for mobile, tablet, and desktop viewports.' },
      { title: 'GSAP ScrollTrigger Motion', desc: 'Smooth scroll-triggered element reveals and elegant typography animation.' }
    ],
    architecture: [
      'Frontend: React.js with Tailwind CSS styling and GSAP motion design',
      'Deployment: Vercel edge deployment with automated CI/CD builds'
    ]
  },
  {
    id: 'employee-management-system',
    slug: 'employee-management-system',
    title: 'Employee Management System',
    subtitle: 'Full-stack enterprise internal portal for managing staff records, attendance, payroll, and department roles.',
    category: 'Enterprise Internal Tool',
    projectType: 'Personal Project',
    year: '2023',
    client: 'Internal Operations Tool',
    role: 'Full-Stack Developer',
    description: 'Secure PHP/MySQL web portal managing staff rosters, leave requests, and role-based access control.',
    fullDescription: "This Employee Management System was built to solve a genuinely common small-business headache: staff records, attendance, and leave requests scattered across spreadsheets and paper files with no single source of truth. The core of the system is a PHP 8 REST API handling all business logic — staff CRUD operations, attendance logging, and leave request workflows — paired with password hashing so credentials are never stored in plain text. A MySQL relational database sits underneath with proper foreign key constraints linking employees to departments, attendance records, and leave requests, which keeps the data consistent even as records grow and prevents the kind of orphaned-record bugs that plague poorly normalized schemas. Role-based access control splits the system into two distinct experiences: administrators get a full dashboard for managing staff rosters, approving or rejecting leave requests, and pulling department-level reports, while employees get a scoped self-service view where they can check their own attendance history and submit leave requests without seeing anyone else's data. That separation was a deliberate design decision — giving every user exactly the access they need and nothing more, rather than a single dashboard gated only by a role flag in the UI. The frontend is styled with Tailwind CSS and vanilla JavaScript for interactivity, kept intentionally lightweight since the tool is meant to run reliably in an internal, low-bandwidth office environment rather than requiring a heavy framework. The result is a self-contained internal tool: no external dependencies on third-party HR software, straightforward enough for non-technical office staff to use daily, and structured so that new modules — payroll, performance reviews, and similar — could be layered onto the existing schema without a rewrite. It was built the way a real internal tool should be: boring, reliable, and easy for the next developer to understand.",
    tags: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    image: '/images/employee-management-system.jpg',
    ogImage: '/images/og/employee-management-system-og.jpg',
    githubUrl: 'https://github.com/hamza-nasir9/',
    featured: true,
    keyFeatures: [
      { title: 'Role-Based Access Control', desc: 'Separate administrative dashboard and employee self-service views.' },
      { title: 'Staff Roster & Leave Tracking', desc: 'Relational database schema managing department records and leave logs.' }
    ],
    architecture: [
      'Backend: Core PHP 8 REST API logic with password hashing',
      'Database: MySQL relational database with foreign key constraints'
    ]
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Muhammad Rashid',
    role: 'Director of Admissions',
    company: 'Global Computer Institute',
    initials: 'MR',
    quote: 'Before the new site launched, our staff spent hours answering basic course fee questions over the phone. Now students find everything directly on the course pages and submit inquiries online before even calling us.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Syed Tariq',
    role: 'Managing Editor',
    company: 'Pulse News Group',
    initials: 'ST',
    quote: 'The admin dashboard Hamza built in PHP is straightforward and quick. Our non-technical editors publish breaking articles and upload media with zero assistance needed.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ahsan Khan',
    role: 'Agency Founder & Creative Director',
    company: 'Grovia Digital Agency',
    initials: 'AK',
    quote: 'The smooth animations on our portfolio site consistently make a great impression during client pitch presentations. It gives prospective clients confidence in our team right away.',
    rating: 5,
  }
];
