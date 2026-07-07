import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { BackToTopButton } from "@/components/layout/back-to-top-button";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgressBar } from "@/components/layout/scroll-progress-bar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "@/styles/globals.css";

// Cyrillic subsets included: testimonial/menu content will use Kazakh and
// Russian names (SPEC.md §7).
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "COFFEE ROOTS — Specialty Coffee in Almaty (Portfolio Concept)",
    template: "%s · COFFEE ROOTS",
  },
  description:
    "Independent portfolio redesign concept for a specialty coffee shop in Almaty, Kazakhstan. Not the official COFFEE ROOTS website.",
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
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgressBar />
          {/* Keyboard users can jump past the sticky nav */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[80] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-md"
          >
            Skip to content
          </a>
          <Navbar />
          <div id="main-content">{children}</div>
          <Footer />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
