import type { Metadata } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { Nav } from "@/components/nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Footer } from "@/components/footer";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Amelia Hart | Austin real estate agent",
    template: "%s | Amelia Hart",
  },
  description:
    "Unscripted Austin home tours, straight talk on price, and one agent from first showing to closing. Book a free call with Amelia Hart.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${schibsted.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SmoothScroll />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
