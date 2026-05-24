import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parth Makwana - Software Engineer & AI Developer",
  description: "Premium portfolio of Parth Makwana. Building scalable applications, AI-powered systems, and immersive digital experiences.",
  keywords: ["Software Engineer", "AI Developer", "Full Stack", "Next.js", "React"],
  authors: [{ name: "Parth Makwana" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parthmakwana.dev",
    title: "Parth Makwana - Software Engineer & AI Developer",
    description: "Premium portfolio showcasing AI-powered applications, full-stack development, and innovative digital solutions.",
    images: [
      {
        url: "https://parthmakwana.dev/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-white antialiased" style={{ fontFamily: 'Geist, system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
