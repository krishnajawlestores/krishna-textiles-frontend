const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "Special Offers & Textile Deals | Krishna Jawli Stores Tiruchirappalli",
  description:
    "Explore special discounts, festival offers, and bulk volume deals on sarees, dhotis, cotton fabrics, and menswear at Krishna Jawli Stores, Tiruchirappalli.",
  keywords: [
    "textile offers",
    "cotton sarees discount",
    "dhotis festival offer",
    "wholesale textile sale Trichy",
    "Krishna Jawli Stores offers",
    "Krishna Jawli Stores offers",
  ],
  openGraph: {
    title: "Special Offers & Textile Deals | Krishna Jawli Stores",
    description: "Save big on genuine mill fabrics and ethnic wear with exclusive offers.",
    url: `${SITE_URL}/offers`,
    siteName: "Krishna Jawli Stores",
  },
};

export default function OffersLayout({ children }) {
  return children;
}
