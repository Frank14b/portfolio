/* eslint-disable @next/next/next-script-for-ga */
import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/common/components";

import 'core-js/full/promise/with-resolvers.js';

Promise.withResolvers = function <T>(): PromiseWithResolvers<T> {
  let resolve: (value: T | PromiseLike<T>) => void = () => {}; // Define resolve with specific type T
  let reject: (reason?: any) => void = () => {};

  const promise = new Promise((res: any, rej: any): any => {
    resolve = res;
    reject = rej;
  });

  return { promise: promise as Promise<T>, resolve, reject };
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frank Donald Fontcha | Software Engineer",
  description: "Here, you&apos;ll get a glimpse of my journey in the world of Software Development, where creativity meets functionality.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script> */}
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
