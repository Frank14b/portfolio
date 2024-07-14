/* eslint-disable @next/next/next-script-for-ga */
import "../globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/common/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frank Donald Fontcha | Software Engineer",
  description: "Here, you&apos;ll get a glimpse of my journey in the world of Software Development, where creativity meets functionality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
