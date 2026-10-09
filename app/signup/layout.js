const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "Create Account | Krishna Jawli Stores Tiruchirappalli",
  description:
    "Register at Krishna Jawli Stores and shop quality sarees, dhotis, and cotton fabrics from Erode & Tiruppur mills. Enjoy wholesale prices, order tracking, and all-India delivery.",
  keywords: [
    "Krishna Jawli Stores register",
    "create account Krishna Jawli Stores",
    "sign up textile store Trichy",
  ],
  openGraph: {
    title: "Create Account | Krishna Jawli Stores",
    description:
      "Join Krishna Jawli Stores for wholesale textile shopping with mill-direct pricing.",
    url: `${SITE_URL}/signup`,
    siteName: "Krishna Jawli Stores",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignupLayout({ children }) {
  return children;
}
