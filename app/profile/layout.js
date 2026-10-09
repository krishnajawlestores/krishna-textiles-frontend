const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "My Account | Krishna Jawli Stores Tiruchirappalli",
  description:
    "Manage your account, orders, and delivery addresses at Krishna Jawli Stores, 39 Parupukkara St, Tiruchirappalli. Track your textile orders and update profile details.",
  keywords: [
    "Krishna Jawli Stores account",
    "my orders Krishna Jawli Stores",
    "profile Tiruchirappalli textile shop",
  ],
  openGraph: {
    title: "My Account | Krishna Jawli Stores",
    description:
      "Manage your profile, orders, and addresses at Krishna Jawli Stores, Tiruchirappalli.",
    url: `${SITE_URL}/profile`,
    siteName: "Krishna Jawli Stores",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ProfileLayout({ children }) {
  return children;
}
