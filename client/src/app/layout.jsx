import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";
import AppShell from "@/components/layout/AppShell";
import { site } from "@/lib/content";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: `${site.name} | ${site.title}`,
  description: site.about,
  icons: {
    icon: "/assets/Hero-Image.jpg",
    apple: "/assets/Hero-Image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${plusJakarta.variable}`}
    >
      <body className="flex min-h-dvh flex-col antialiased">
        <ClientProviders>
          <AppShell>{children}</AppShell>
        </ClientProviders>
      </body>
    </html>
  );
}
