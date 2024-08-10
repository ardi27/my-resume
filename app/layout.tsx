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
