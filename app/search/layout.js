const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "Search Textiles & Fabrics | Krishna Jawli Stores Tiruchirappalli",
  description:
    "Search our wide collection of sarees, dhotis, lungis, cotton fabrics, and ethnic wear at Krishna Jawli Stores, 39 Parupukkara St, Tiruchirappalli. Find mill-direct products from Erode & Tiruppur at wholesale rates.",
  keywords: [
    "search textiles Krishna Jawli Stores",
    "find sarees Trichy",
    "search dhotis online",
    "Krishna Jawli Stores product search",
    "textiles catalogue Tiruchirappalli",
  ],
  openGraph: {
    title: "Search Textiles & Fabrics | Krishna Jawli Stores",
    description:
      "Browse and search our complete collection of genuine mill-sourced textiles at Krishna Jawli Stores, Tiruchirappalli.",
    url: `${SITE_URL}/search`,
    siteName: "Krishna Jawli Stores",
  },
};

export default function SearchLayout({ children }) {
  return children;
}
