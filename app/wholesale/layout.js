const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "Wholesale & B2B Bulk Textiles | Krishna Jawli Stores Tiruchirappalli",
  description:
    "Order wholesale textiles in bulk directly from Krishna Jawli Stores (Krishna Jawli Stores), 39, Parupukkara St, Tiruchirappalli. Tiered factory rates, verified mill quality, and pan-India dealer transport.",
  keywords: [
    "Krishna Jawli Stores wholesale",
    "wholesale textiles Trichy",
    "wholesale textile shop Tiruchirappalli",
    "bulk clothing suppliers Tamil Nadu",
    "textiles Parupukkara street",
    "direct mill price fabrics",
    "Krishna Jawli Stores wholesale",
  ],
  openGraph: {
    title: "Wholesale & B2B Bulk Textiles | Krishna Jawli Stores Tiruchirappalli",
    description:
      "Factory-direct tiered pricing for retailers & resellers across India from Krishna Jawli Stores, Tiruchirappalli.",
    url: `${SITE_URL}/wholesale`,
    siteName: "Krishna Jawli Stores",
  },
};

export default function WholesaleLayout({ children }) {
  return children;
}
