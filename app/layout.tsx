import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pmgslovakia.sk"),
  title: {
    default: "PMG Slovakia | Mobilita bez starostí",
    template: "%s | PMG Slovakia",
  },
  description:
    "PMG Slovakia poskytuje predplatné vozidiel, náhradnú mobilitu, Help Car a komplexnú starostlivosť o vozidlá pre firmy, podnikateľov aj súkromné osoby.",
  keywords: [
    "PMG Slovakia",
    "prenájom vozidiel",
    "predplatné vozidiel",
    "subscription vozidiel",
    "náhradné vozidlo",
    "Help Car",
    "Fleet Care",
    "správa vozového parku",
    "servis vozidiel",
    "STK",
    "pneuservis",
    "firemná mobilita",
    "Žilina",
  ],
  authors: [{ name: "PMG SLOVAKIA, s.r.o." }],
  creator: "PMG SLOVAKIA, s.r.o.",
  publisher: "PMG SLOVAKIA, s.r.o.",
  openGraph: {
    title: "PMG Slovakia | Mobilita bez starostí",
    description:
      "Predplatné vozidiel, náhradná mobilita a komplexná starostlivosť o vozidlá pre firmy aj jednotlivcov.",
    url: "https://pmgslovakia.sk",
    siteName: "PMG Slovakia",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/bmw-m5-hero.png",
        width: 1200,
        height: 630,
        alt: "PMG Slovakia - mobilita bez starostí",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PMG Slovakia | Mobilita bez starostí",
    description:
      "Predplatné vozidiel, náhradná mobilita a komplexná starostlivosť o vozidlá.",
    images: ["/bmw-m5-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6KX27T9W8G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6KX27T9W8G');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}