import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ui/ScrollAnimations";
import { siteConfig } from "@/config/site";

const hkGrotesk = Hanken_Grotesk({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-hk-grotesk",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: `${siteConfig.name} | Software Engineer`,
  description: siteConfig.description,
  verification: siteConfig.verification.google
    ? {
        google: siteConfig.verification.google,
      }
    : undefined,
  openGraph: {
    url: siteConfig.baseUrl,
    siteName: `${siteConfig.legalName} Portfolio`,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.legalName} - Portfolio`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hkGrotesk.className} ${instrumentSerif.variable}`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">{children}</div>

          <ScrollToTop />
        </ThemeProvider>
        {siteConfig.analytics.databuddyClientId && (
          <script
            src="https://cdn.databuddy.cc/databuddy.js"
            data-client-id={siteConfig.analytics.databuddyClientId}
            data-enable-batching="true"
            async
          ></script>
        )}
      </body>
    </html>
  );
}
