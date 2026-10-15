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
    const normalizedPath =
      path === '/'
        ? '/'
        : `/${path.replace(/^\/+|\/+$/g, '')}`;

    const canonicalUrl = `${SITE_URL}${normalizedPath}`;

    document.title = title;

    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta(
      'name',
      'robots',
      noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large'
    );

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'SSS Associate');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonicalUrl);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    setLink('canonical', canonicalUrl);
  }, [title, description, path, keywords, noindex]);

  return null;
}