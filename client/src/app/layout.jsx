import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";
import AppShell from "@/components/layout/AppShell";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
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
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <meta name="theme-color" content="#f4f4f5" />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <ClientProviders>
          <AppShell>{children}</AppShell>
        </ClientProviders>
      </body>
    </html>
  );
}
