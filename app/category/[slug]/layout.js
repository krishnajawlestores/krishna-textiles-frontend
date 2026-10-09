const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

async function getCategory(slug) {
  try {
    const res = await fetch(`${API_BASE}/categories/${slug}`, { next: { revalidate: 600 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data || json;
  } catch (e) {
    return null;
  }
}

function formatSlug(slug) {
  if (!slug) return "Category";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }) {
  const category = await getCategory(params.slug);
  const name = category?.name || formatSlug(params.slug);

  const title = `${name} Collection | Krishna Jawli Stores Tiruchirappalli`;
  const description = `Shop authentic ${name} at Krishna Jawli Stores, 39, Parupukkara St, Tiruchirappalli. Best wholesale & retail mill rates, guaranteed quality, and all-India fast shipping.`;

  return {
    title,
    description,
    keywords: [
      name,
      `${name} wholesale`,
      `${name} Tiruchirappalli`,
      "Krishna Jawli Stores",
      "Krishna Jawli Stores Trichy",
      "39 Parupukkara St",
      "textile suppliers Tamil Nadu",
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/category/${params.slug}`,
      siteName: "Krishna Jawli Stores",
      type: "website",
    },
  };
}

export default async function CategoryLayout({ children, params }) {
  const category = await getCategory(params.slug);
  const name = category?.name || formatSlug(params.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Categories",
        item: `${SITE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: name,
        item: `${SITE_URL}/category/${params.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
