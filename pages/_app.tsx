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
        <meta
          property="og:description"
          content="Світла пам'ять про нього назавжди залишиться у наших серцях. Нехай його ім'я живе вічно серед тих, хто пам'ятає та любить."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_PUBLIC_URL}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_PUBLIC_URL}/assets/images/photo_2025-04-27_16-48-27.jpg`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`${process.env.NEXT_PUBLIC_PUBLIC_URL}`}
        />
        <meta property="twitter:title" content="Коробко Олексій Леонідович" />
        <meta
          property="twitter:description"
          content="Світла пам'ять про нього назавжди залишиться у наших серцях. Нехай його ім'я живе вічно серед тих, хто пам'ятає та любить."
        />
        <meta
          property="twitter:image"
          content={`${process.env.NEXT_PUBLIC_PUBLIC_URL}/assets/images/photo_2025-04-27_16-48-27.jpg`}
        />
      </Head>
      <Component {...pageProps} />
    </MobileContext.Provider>
  );
}
