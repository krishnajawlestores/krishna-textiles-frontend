const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "My Wishlist | Krishna Jawli Stores Tiruchirappalli",
  description:
    "View your saved favourite textiles, sarees, dhotis, and fabrics at Krishna Jawli Stores, Tiruchirappalli. Add items to your cart when you're ready to order.",
  keywords: [
    "Krishna Jawli Stores wishlist",
    "saved textiles Trichy",
    "favourite sarees dhotis",
  ],
  openGraph: {
    title: "My Wishlist | Krishna Jawli Stores",
    description:
      "Your saved textile favourites at Krishna Jawli Stores, Tiruchirappalli.",
    url: `${SITE_URL}/wishlist`,
    siteName: "Krishna Jawli Stores",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function WishlistLayout({ children }) {
  return children;
}
