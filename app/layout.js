import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { CartProvider } from "@/components/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://krishnajawlistores.in"),
  title: {
    default: "Krishna Jawli Stores | Tiruchirappalli Wholesale & Retail Textiles",
    template: "%s | Krishna Jawli Stores",
  },
  description:
    "Krishna Jawli Stores (Krishna Jawli Stores), 39, Parupukkara St, Tiruchirappalli, Tamil Nadu. Quality textiles, dhotis, sarees & fabrics sourced directly from Erode & Tiruppur mills at wholesale and retail prices.",
  keywords: [
    "Krishna Jawli Stores",
    "Krishna Jawli Stores Trichy",
    "Krishna Jawli Stores Tiruchirappalli",
    "Krishna Jawli Stores Trichy",
    "39 Parupukkara St",
    "Parupukkara street jawli store",
    "wholesale textiles Trichy",
    "pure cotton dhotis online",
    "cotton sarees wholesale",
    "lungis Tiruppur Erode",
    "Tamil Nadu textile supplier",
  ],
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Krishna Jawli Stores | Tiruchirappalli Wholesale & Retail Textiles",
    description:
      "Krishna Jawli Stores, 39, Parupukkara St, Tiruchirappalli. Quality textiles, sarees, dhotis, and fabrics at factory prices with all-India shipping.",
    url: "https://krishnajawlistores.in",
    siteName: "Krishna Jawli Stores",
    images: [
      {
        url: "/logo.png?v=2",
        width: 600,
        height: 200,
        alt: "Krishna Jawli Stores Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Jawli Stores | Tiruchirappalli Wholesale & Retail Textiles",
    description:
      "Krishna Jawli Stores, 39, Parupukkara St, Tiruchirappalli. Wholesale & retail textile store.",
    images: ["/logo.png?v=2"],
  },
};

const storeSchema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Krishna Jawli Stores",
  alternateName: "Krishna Jawli Stores",
  url: "https://krishnajawlistores.in",
  image: "https://krishnajawlistores.in/logo.png?v=2",
  telephone: "+91 90253 11314",
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
