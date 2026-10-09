const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

async function getProduct(id) {
  try {
    const res = await fetch(`${API_BASE}/products/${id}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.data || json;
  } catch (e) {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: "Textile Product | Krishna Jawli Stores Tiruchirappalli",
      description: "Shop quality textiles at wholesale & retail rates from Krishna Jawli Stores, 39, Parupukkara St, Tiruchirappalli.",
    };
  }

  const title = `${product.name} | Krishna Jawli Stores Tiruchirappalli`;
  const rawDesc = product.description || `Buy ${product.name} online at Krishna Jawli Stores, 39, Parupukkara St, Tiruchirappalli. Premium quality textiles at wholesale & retail rates.`;
  const description = rawDesc.length > 160 ? rawDesc.slice(0, 157) + "..." : rawDesc;
  const image = product.images?.[0] || product.image || "/logo.png?v=2";

  return {
    title,
    description,
    keywords: [
      product.name,
      product.category?.name || "Textiles",
      "Krishna Jawli Stores",
      "Krishna Jawli Stores Tiruchirappalli",
      "Krishna Jawli Stores Trichy",
      "39 Parupukkara St",
      "wholesale price",
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/product/${params.id}`,
      siteName: "Krishna Jawli Stores",
      images: [
        {
          url: image.startsWith("http") ? image : `${SITE_URL}${image}`,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${SITE_URL}${image}`],
    },
  };
}

export default async function ProductLayout({ children, params }) {
  const product = await getProduct(params.id);

  let productSchema = null;
  if (product) {
    const image = product.images?.[0] || product.image || `${SITE_URL}/logo.png?v=2`;
    const fullImageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

    productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      image: [fullImageUrl],
      description: product.description || product.name,
      sku: product.sku || String(product.id),
      brand: {
        "@type": "Brand",
        name: product.brand?.name || "Krishna Jawli Stores",
      },
      offers: {
        "@type": "Offer",
        url: `${SITE_URL}/product/${params.id}`,
        priceCurrency: "INR",
        price: product.price || 0,
        itemCondition: "https://schema.org/NewCondition",
        availability:
          product.stockQuantity > 0 || product.stockStatus !== "out_of_stock"
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
        seller: {
          "@type": "ClothingStore",
          name: "Krishna Jawli Stores",
          alternateName: "Krishna Jawli Stores",
          address: {
            "@type": "PostalAddress",
            streetAddress: "39, Parupukkara St",
            addressLocality: "Tiruchirappalli",
            addressRegion: "Tamil Nadu",
            postalCode: "620001",
            addressCountry: "IN",
          },
        },
      },
    };
  }

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      {children}
    </>
  );
}
