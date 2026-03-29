import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Musa Islam Fahad | AI & Data Science Portfolio",
  description: "Portfolio of Md Musa Islam Fahad - Data Science & AI Enthusiast, CSE Student at Daffodil International University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${syne.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="antialiased min-h-screen transition-colors" style={{ fontFamily: "var(--font-mono)" }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
