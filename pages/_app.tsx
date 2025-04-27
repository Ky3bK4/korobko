import { createContext, useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { debounce } from "@/lib/debounce";
import "@/styles/globals.css";

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
      <Component {...pageProps} />
    </MobileContext.Provider>
  );
}
