"use client"

import { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import FooterNew from "../components/Footer-New";
import CTA from "../components/CTA";
import WA from "../components/WA";
import { UTMProvider } from "../Context/UTMContext";
import { useRouter } from "next/router";
import { InfinitySpin } from "react-loader-spinner";
import "../styles/globals.scss";
import "../styles/globals.css";

// Font config
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleRouteChange = () => {
    const spinner = document.getElementById("spinner");
    const contentBody = document.getElementById("contentBody");
    if (spinner && contentBody) {
      spinner.style.display = "flex";
      contentBody.style.display = "none";
    }
  };

  const handleRouteComplete = () => {
    setTimeout(() => {
      const spinner = document.getElementById("spinner");
      const contentBody = document.getElementById("contentBody");
      if (spinner && contentBody) {
        spinner.style.display = "none";
        contentBody.style.display = "block";
      }
    }, 100);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);
    };
  }, [router.events]);

  return (
    <main className={poppins.className}>
      <Head>
      {/* <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" /> */}
      </Head>
      <UTMProvider>
        <div
          id="spinner"
          style={{
            display: "none",
            backdropFilter: "blur(10px)",
            position: "absolute",
            width: "100vw",
            height: "100vh",
            zIndex: 3,
            margin: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InfinitySpin
            // visible={true}
            width="200"
            color="#4B2AAD"
            // ariaLabel="infinity-spin-loading"
          />
        </div>
        <div id="contentBody">
          <Component {...pageProps} />
         
          <div className="!flex !flex-row !justify-between lg:!justify-end !fixed !z-1030 !bottom-0 !right-0 !left-0">
            <CTA />
            <WA />
          </div>
        </div>
      </UTMProvider>
      <GoogleTagManager gtmId="GTM-WQ5DD2D" />
      {/* <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script> */}
    </main>
  );
}
