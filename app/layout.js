import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { CartProvider } from "@/components/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://krishnatextiles.in"),
  title: "Krishna Textiles | Tiruchirappalli Wholesale & Retail Textiles",
  description:
    "Krishna Textiles, 39, Parupukkara St, Tiruchirappalli, Tamil Nadu. Quality textiles sourced from Erode & Tiruppur mills at wholesale and retail prices with pan-India delivery.",
  openGraph: {
    title: "Krishna Textiles | Tiruchirappalli Wholesale & Retail Textiles",
    description:
      "Krishna Textiles, 39, Parupukkara St, Tiruchirappalli. Quality textiles, sarees, dhotis, and fabrics at factory prices.",
    url: "https://krishnatextiles.in",
    siteName: "Krishna Textiles",
    images: [
      {
        url: "/logo.png?v=2",
        width: 600,
        height: 200,
        alt: "Krishna Textiles Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Krishna Textiles",
  image: "https://krishnatextiles.in/logo.png?v=2",
  telephone: "+91 98765 43210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "39, Parupukkara St",
    addressLocality: "Tiruchirappalli",
    addressRegion: "Tamil Nadu",
    postalCode: "620001",
    addressCountry: "IN",
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#f8fafc] text-slate-800 antialiased">
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <LayoutWrapper>{children}</LayoutWrapper>
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
