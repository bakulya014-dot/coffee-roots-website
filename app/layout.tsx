import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { BackToTopButton } from "@/components/layout/back-to-top-button";
import { FloatingReserveButton } from "@/components/layout/floating-reserve-button";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider } from "@/components/layout/language-provider";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgressBar } from "@/components/layout/scroll-progress-bar";
import { SkipLink } from "@/components/layout/skip-link";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { LOCAL_BUSINESS_JSONLD, SITE_URL } from "@/lib/seo";
import "@/styles/globals.css";

// cyrillic covers Russian; cyrillic-ext carries the Kazakh-specific
// letters (Ә Ғ Қ Ң Ө Ұ Ү Һ) so KZ content renders without fallback fonts.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "COFFEE ROOTS — Specialty Coffee in Almaty (Portfolio Concept)",
    template: "%s · COFFEE ROOTS",
  },
  description:
    "Independent portfolio redesign concept for a specialty coffee shop in Almaty, Kazakhstan. Not the official COFFEE ROOTS website.",
  openGraph: {
    type: "website",
    siteName: "COFFEE ROOTS (Portfolio Concept)",
    title: "COFFEE ROOTS — Specialty Coffee in Almaty",
    description:
      "Specialty coffee, morning light, and a quiet corner to work — an independent portfolio redesign concept.",
    images: [{ url: "/images/cafe-mural.jpg", width: 1500, height: 1875 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-scroll-behavior keeps Next.js suppressing smooth-scroll during
    // route transitions (matches the CSS scroll-behavior in globals.css)
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <script
          type="application/ld+json"
          // Static, build-time constant — no user input flows in.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(LOCAL_BUSINESS_JSONLD),
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <LoadingScreen />
            <ScrollProgressBar />
            {/* Keyboard users can jump past the sticky nav */}
            <SkipLink />
            <Navbar />
            <div id="main-content">{children}</div>
            <Footer />
            <FloatingReserveButton />
            <BackToTopButton />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
