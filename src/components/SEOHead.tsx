import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  breadcrumbs?: { name: string; url: string }[];
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/og/site-default-og.jpg',
  breadcrumbs,
  schema,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          element.setAttribute('name', selector.replace("meta[name='", '').replace("']", ''));
        } else if (selector.startsWith('meta[property=')) {
          element.setAttribute('property', selector.replace("meta[property='", '').replace("']", ''));
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Meta Description & OpenGraph Tags
    setMetaTag("meta[name='description']", 'content', description);
    setMetaTag("meta[property='og:title']", 'content', title);
    setMetaTag("meta[property='og:description']", 'content', description);
    setMetaTag("meta[property='og:url']", 'content', canonicalUrl);
    setMetaTag("meta[property='og:image']", 'content', ogImage);
    setMetaTag("meta[property='og:image:width']", 'content', '1200');
    setMetaTag("meta[property='og:image:height']", 'content', '630');
    setMetaTag("meta[name='twitter:title']", 'content', title);
    setMetaTag("meta[name='twitter:description']", 'content', description);
    setMetaTag("meta[name='twitter:image']", 'content', ogImage);

    // 3. Update Canonical Tag
    let canonicalElement = document.querySelector("link[rel='canonical']");
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    // 4. Inject BreadcrumbList JSON-LD Schema if provided
    let breadcrumbScript = document.querySelector('#breadcrumb-jsonld');
    if (breadcrumbs && breadcrumbs.length > 0) {
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.setAttribute('id', 'breadcrumb-jsonld');
        breadcrumbScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(breadcrumbScript);
      }
      const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
      breadcrumbScript.textContent = JSON.stringify(schemaData);
    } else if (breadcrumbScript) {
      breadcrumbScript.remove();
    }

    // 5. Inject page-specific JSON-LD Schema (e.g. CreativeWork, FAQPage) if provided
    let pageSchemaScript = document.querySelector('#page-jsonld');
    if (schema) {
      if (!pageSchemaScript) {
        pageSchemaScript = document.createElement('script');
        pageSchemaScript.setAttribute('id', 'page-jsonld');
        pageSchemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(pageSchemaScript);
      }
      pageSchemaScript.textContent = JSON.stringify(schema);
    } else if (pageSchemaScript) {
      pageSchemaScript.remove();
    }
  }, [title, description, canonicalUrl, ogImage, breadcrumbs, schema]);

  return null;
};
