import { Html, Head, Main, NextScript } from "next/document";

import { primaryFont } from "@/fonts/fonts";

export default function Document() {
  return (
    <Html lang="en" className={primaryFont.variable}>
      <Head />
      <body className={`${primaryFont.variable} antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
