const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "Featured Textile Brands | Krishna Jawli Stores Tiruchirappalli",
  description:
    "Explore certified textile brands and heritage mill partners available at Krishna Jawli Stores, 39, Parupukkara St, Tiruchirappalli. 100% authentic quality guaranteed.",
  keywords: [
    "textile brands",
    "dhoti brands Tamil Nadu",
    "saree manufacturers",
    "Krishna Jawli Stores brands",
    "Krishna Textiles brands",
    "Trichy branded clothing",
  ],
  openGraph: {
    title: "Featured Textile Brands | Krishna Jawli Stores",
    description: "Shop top textile brands with mill-direct authenticity at Krishna Jawli Stores.",
    url: `${SITE_URL}/brands`,
    siteName: "Krishna Jawli Stores",
  },
};

export default function BrandsLayout({ children }) {
  return children;
}
