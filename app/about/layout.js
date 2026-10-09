const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "About Us | Krishna Jawli Stores - Tiruchirappalli (Trichy)",
  description:
    "Learn about Krishna Jawli Stores (Krishna Jawli Stores), located at 39, Parupukkara St, Tiruchirappalli. Delivering genuine mill-sourced fabrics from Erode & Tiruppur to homes and retail stores across India.",
  keywords: [
    "About Krishna Jawli Stores",
    "Krishna Jawli Stores Tiruchirappalli history",
    "Krishna Jawli Stores Tiruchirappalli",
    "Trichy textile store",
    "Parupukkara street textile dealer",
  ],
  openGraph: {
    title: "About Us | Krishna Jawli Stores - Tiruchirappalli",
    description:
      "Direct mill sourcing and retail/wholesale distribution from Krishna Jawli Stores, 39, Parupukkara St, Tiruchirappalli.",
    url: `${SITE_URL}/about`,
    siteName: "Krishna Jawli Stores",
  },
};

export default function AboutLayout({ children }) {
  return children;
}
