export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/cart",
        "/profile",
        "/signin",
        "/signup",
        "/login",
        "/register",
        "/api/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
