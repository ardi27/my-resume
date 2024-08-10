import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/system";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ardi Prima",
  description: "Just learning Next.js with this site",
  metadataBase: new URL("https://ardi-prima.vercel.app/"),
  openGraph: {
    images: {
      url: "https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-19/443240568_424927340260163_6546875819672459448_n.jpg?_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=0nY2Oio7Cv8Q7kNvgHcTVPv&edm=APHcPcMBAAAA&ccb=7-5&oh=00_AYCOZ_UMeK3OzOY44OtWyA0BswGfhKsxQxBKa61SzHb1hA&oe=66BD00D8&_nc_sid=bef7bc",
    },
  },
  twitter: {
    images: [
      "https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-19/443240568_424927340260163_6546875819672459448_n.jpg?_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=0nY2Oio7Cv8Q7kNvgHcTVPv&edm=APHcPcMBAAAA&ccb=7-5&oh=00_AYCOZ_UMeK3OzOY44OtWyA0BswGfhKsxQxBKa61SzHb1hA&oe=66BD00D8&_nc_sid=bef7bc",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          <NextUIProvider>{children}</NextUIProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
