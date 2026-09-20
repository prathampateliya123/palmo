import { Inter, Khand, Patrick_Hand } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const khand = Khand({
  variable: "--font-khand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.palmo.co.in"),
  title: {
    default: "Palmo Coconut Co. - Pure Coconut Water",
    template: "%s | Palmo",
  },
  description:
    "Paradise in every sip. 100% raw, cold-pressed coconut water packed with natural electrolytes, zero added sugar, and infused with real organic fruits.",
  applicationName: "Palmo",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Palmo Coconut Co. - Pure Coconut Water",
    description:
      "Cold-pressed, never concentrated. 100% raw coconut water packed with natural electrolytes and zero added sugar.",
    url: "https://www.palmo.co.in",
    siteName: "Palmo Coconut Co.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Palmo Coconut Co. - Pure Coconut Water",
    description:
      "Paradise in every sip. Cold-pressed raw coconut water with essential natural electrolytes.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#f8f8f0",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${khand.variable} ${patrickHand.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
