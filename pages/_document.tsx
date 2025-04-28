import { Html, Head, Main, NextScript } from "next/document";
// import Script from "next/script";

export default function Document() {
  //
  return (
    <Html lang="en">
      <Head>
        {/*  Google Tag Manager */}
        {/* <Script
          id="googleTagManager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQ5DD2D');`,
          }}
        /> */}
        {/* End Google Tag Manager */}
        <meta
          name="google-site-verification"
          content="Ioj2n1aRI-j6tLDf3uIGNIHrNyZjWfg7LeuenD9UDiY"
        />
      </Head>
      <body>
        {/* <noscript
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQ5DD2D"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
