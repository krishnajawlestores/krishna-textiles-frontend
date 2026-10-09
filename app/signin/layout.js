const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "Sign In | Krishna Jawli Stores Tiruchirappalli",
  description:
    "Sign in to your Krishna Jawli Stores account to access orders, wishlist, and exclusive wholesale deals. Quality textiles from Erode & Tiruppur mills, delivered across India.",
  keywords: [
    "Krishna Jawli Stores login",
    "sign in Krishna Jawli Stores",
    "textile store login Trichy",
  ],
  openGraph: {
    title: "Sign In | Krishna Jawli Stores",
    description:
      "Log in to your Krishna Jawli Stores account for order tracking and exclusive textile deals.",
    url: `${SITE_URL}/signin`,
    siteName: "Krishna Jawli Stores",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SigninLayout({ children }) {
  return children;
}
