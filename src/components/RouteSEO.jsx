import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { buildSchema } from "../seo/schemas";

export default function RouteSEO() {
  const { pathname } = useLocation();
  const data = buildSchema(pathname);
  if (!data) return null;

  const { meta, json } = data;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />

      <script type="application/ld+json">{JSON.stringify(json)}</script>
    </Helmet>
  );
}