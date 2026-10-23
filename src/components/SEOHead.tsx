import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: string;
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

const BASE_URL = "https://titaniumfinancialconsultancy.com";
const DEFAULT_TITLE = "Titanium Financial Consultancy | Global Financial, Tax, Investment & Corporate Advisory";
const DEFAULT_DESC =
  "Global financial consultancy operating across North America (USA, Canada), Europe, Philippines, Africa, and worldwide. Corporate accounting, international tax planning, company formation, and investment management.";

export default function SEOHead({
  title,
  description = DEFAULT_DESC,
  canonicalPath = "/",
  ogType = "website",
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title ? `${title} | Titanium Financial Consultancy` : DEFAULT_TITLE;
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 2. Set Meta Description & Open Graph
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);

    const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
    setMetaTag("property", "og:url", canonicalUrl);

    // 3. Set Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    // 4. Route-specific JSON-LD Injection
    let routeScript = document.getElementById("route-jsonld");
    if (jsonLd) {
      if (!routeScript) {
        routeScript = document.createElement("script");
        routeScript.setAttribute("type", "application/ld+json");
        routeScript.setAttribute("id", "route-jsonld");
        document.head.appendChild(routeScript);
      }
      routeScript.textContent = JSON.stringify(jsonLd);
    } else if (routeScript) {
      routeScript.remove();
    }
  }, [title, description, canonicalPath, ogType, jsonLd]);

  return null;
}
