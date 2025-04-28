import Head from "next/head";

const MetaManager = ({ pageTitle, pageDescription, pageURL, pageKeywords }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Only render keywords meta tag if pageKeywords exists */}
      {pageKeywords && <meta name="keywords" content={pageKeywords} />}
      {/* Rest of your existing meta tags */}
      {/* favicon block for all devices */}
      <link rel="icon" type="image/png" href="/Images/favicon/favicon-48x48.png" sizes="48x48" />
      <link rel="icon" type="image/svg+xml" href="/Images/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/Images/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/Images/favicon/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Bhasha.io" />
      <link rel="manifest" href="/Images/favicon/site.webmanifest" />
      {/* End of Favicon Block */}
      <meta name="robots" content="index, follow"></meta>
      <meta name="google" content="notranslate" />
      <link rel="canonical" href={pageURL} />
    </Head>
  );
};

export default MetaManager;
