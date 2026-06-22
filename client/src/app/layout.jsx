import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";
import AppShell from "@/components/layout/AppShell";
import { site } from "@/lib/content";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <ClientProviders>
          <AppShell>{children}</AppShell>
        </ClientProviders>
      </body>
    </html>
  );
}
