import { PAGES, SITE_URL } from "@/lib/site";

// Breadcrumb structured data: Home > Page
export default function Crumbs({ page }) {
  const p = PAGES[page];
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: p.name, item: `${SITE_URL}${p.path}` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, "\\u003c") }} />;
}
