import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  noindex?: boolean;
}

const SITE_URL = 'https://sss-associate.vercel.app';

function setMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`
  );

  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

export function SEO({
  title,
  description,
  path,
  keywords = '',
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    const cleanPath = path.replace(/^\/+|\/+$/g, '');

    const normalizedPath = cleanPath ? `/${cleanPath}` : '/';

    const canonicalUrl = `${SITE_URL}${normalizedPath}`;

    document.title = title;

    setMeta('name', 'description', description);

    // Google does not use the meta keywords tag for ranking.
    // Kept for compatibility with existing project code.
    setMeta('name', 'keywords', keywords);

    setMeta(
      'name',
      'robots',
      noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // Open Graph metadata
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'SSS Associate');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:locale', 'en_IN');

    // Twitter/X metadata
    setMeta('name', 'twitter:card', 'summary');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    // Canonical URL
    setLink('canonical', canonicalUrl);
  }, [title, description, path, keywords, noindex]);

  return null;
}