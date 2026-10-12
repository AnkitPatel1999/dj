import { SITE_URL, PAGES } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...Object.values(PAGES).map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: p.path === "/services" || p.path === "/book-most-powerful-sound-of-gujarat" ? 0.9 : 0.7,
    })),
  ];
}
