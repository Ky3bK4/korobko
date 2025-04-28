import { createContext, useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { debounce } from "@/lib/debounce";
import "@/styles/globals.css";
import Head from "next/head";

export const MobileContext = createContext(true);

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = debounce(() => {
      const newIsMobile = window.innerWidth < 1024;
      setIsMobile(newIsMobile);
    }, 5);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      <Head>
        <title>Коробко Олексій Леонідович</title>
        <meta name="description" content="Коробко Олексій Леонідович" />
        <meta property="og:title" content="Коробко Олексій Леонідович" />
        <meta property="og:description" content="Сторінка в пам'ять про Коробко Олексія Леонідовича" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_PUBLIC_URL}/assets/images/photo_2025-04-27_16-48-27.jpg`} />
      </Head>
      <Component {...pageProps} />
    </MobileContext.Provider>
  );
}
