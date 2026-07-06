import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
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
  title: "COFFEE ROOTS — Specialty Coffee in Almaty (Portfolio Concept)",
  description:
    "Independent portfolio redesign concept for a specialty coffee shop in Almaty, Kazakhstan. Not the official COFFEE ROOTS website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
