import { PAGES, SITE } from "@/lib/site";

export function pageMeta(key) {
  const p = PAGES[key];
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: p.path },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: "en_IN",
      url: p.path,
      title: `${p.title} | ${SITE.name}`,
      description: p.description,
      images: [{ url: p.image, alt: `${SITE.name} ${p.name}` }],
    },
    twitter: { card: "summary_large_image", title: `${p.title} | ${SITE.name}`, description: p.description, images: [p.image] },
  };
}
