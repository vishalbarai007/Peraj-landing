import type { Metadata } from "next";
import { Forum, Inter } from "next/font/google";
import "./globals.css";

const forum = Forum({ variable: "--font-forum", subsets: ["latin"], weight: "400", display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Peraj Insurance | Built on trust. Shaped around people.",
  description:
    "Peraj Insurance is a fiduciary insurance advisory partner for businesses and individuals, trusted since 1951. Request a free callback.",
  openGraph: {
    title: "Peraj Insurance | Built on trust. Shaped around people.",
    description: "Commercial insurance and advisory since 1951. Request a free callback.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${forum.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
