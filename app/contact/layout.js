const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in";

export const metadata = {
  title: "Contact & Store Location | Krishna Jawli Stores Tiruchirappalli",
  description:
    "Visit Krishna Jawli Stores at 39, Parupukkara St, Tiruchirappalli, TN 620001, or call us at +91 90253 11314 for wholesale inquiries and customer support.",
  keywords: [
    "Krishna Jawli Stores address",
    "Krishna Jawli Stores Tiruchirappalli contact",
    "Krishna Textiles Tiruchirappalli phone number",
    "39 Parupukkara street Trichy map",
  ],
  openGraph: {
    title: "Contact & Store Location | Krishna Jawli Stores Tiruchirappalli",
    description:
      "Find our store address, phone number, and business hours in Tiruchirappalli, Tamil Nadu.",
    url: `${SITE_URL}/contact`,
    siteName: "Krishna Jawli Stores",
  },
};

export default function ContactLayout({ children }) {
  return children;
}
