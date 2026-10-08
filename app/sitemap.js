const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export default async function sitemap() {
  const routes = [
    "",
    "/products",
    "/wholesale",
    "/about",
    "/contact",
    "/brands",
    "/offers",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Fetch dynamic categories
  let categoryRoutes = [];
  try {
    const catRes = await fetch(`${API_BASE}/categories`, { next: { revalidate: 3600 } });
    if (catRes.ok) {
      const catData = await catRes.json();
      const categories = Array.isArray(catData) ? catData : catData?.data || [];
      categoryRoutes = categories.map((cat) => ({
        url: `${SITE_URL}/category/${cat.id}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
    }
  } catch (err) {
    // Fail gracefully during static generation
  }

  // Fetch dynamic products
  let productRoutes = [];
  try {
    const prodRes = await fetch(`${API_BASE}/products?limit=100`, { next: { revalidate: 3600 } });
    if (prodRes.ok) {
      const prodData = await prodRes.json();
      const products = Array.isArray(prodData) ? prodData : prodData?.data || [];
      productRoutes = products.map((prod) => ({
        url: `${SITE_URL}/product/${prod.id}`,
        lastModified: prod.updatedAt || new Date().toISOString(),
        changeFrequency: "daily",
        priority: 0.9,
      }));
    }
  } catch (err) {
    // Fail gracefully during static generation
  }

  return [...routes, ...categoryRoutes, ...productRoutes];
}
