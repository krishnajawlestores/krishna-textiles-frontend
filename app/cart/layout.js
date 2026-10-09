const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "Shopping Cart | Krishna Jawli Stores Tiruchirappalli",
  description:
    "Review your shopping cart at Krishna Jawli Stores, Tiruchirappalli. Quality sarees, dhotis, cotton fabrics & textiles sourced from Erode & Tiruppur mills at wholesale prices. Secure checkout with all-India delivery.",
  keywords: [
    "Krishna Jawli Stores cart",
    "buy textiles online Trichy",
    "checkout sarees dhotis",
    "online textile shopping Tiruchirappalli",
  ],
  openGraph: {
    title: "Shopping Cart | Krishna Jawli Stores",
    description:
      "Complete your textile purchase at Krishna Jawli Stores, Tiruchirappalli — secure checkout with pan-India shipping.",
    url: `${SITE_URL}/cart`,
    siteName: "Krishna Jawli Stores",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CartLayout({ children }) {
  return children;
}
