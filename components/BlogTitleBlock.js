import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import { Inter } from "next/font/google";
import ShareButton from "./SocialShare";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function BlogTitleBlock(props) {
  const { title, metaTitle, date, time = 10, subCategory, category, tags, blogURL, metaDetails, publishDate, modifiedDate, imageURL, keywords } = props;

  const fileName = `https://bhasha.io/blog/${blogURL}`;
  const coverImageURL = "https://bhasha.io/"+imageURL;

  const dateObject = new Date(date);

  const options = { month: 'short', day: '2-digit', year: 'numeric' };
  const formattedDate = dateObject.toLocaleString('en-US', options);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fileName,
    },
    "headline": title,
    "description": metaDetails,
    "image": coverImageURL,  
    "author": {
      "@type": "Organization",
      "name": "bhasha.io",
      "url": "https://bhasha.io/"
    },  
    "publisher": {
      "@type": "Organization",
      "name": "bhasha.io",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bhasha.io/_next/image?url=%2FImages%2FBhashaLogo.png&w=640&q=75"
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "keywords": keywords || undefined // Add keywords to schema, omit if not provided
  
  }
  
  const [isMobile, setIsMobile] = useState(false)
  const [lineHeight, setLineHeight] = useState("4rem");

  useEffect(() => {
    const handleResize = () =>{
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setLineHeight(mobile ? "2rem" : "4rem");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow"/>
        <meta name="google" content="notranslate" />
        <link rel="canonical" href={`https://bhasha.io/blog/${blogURL}`} />
        <meta name="description" content={metaDetails} />
        {/* Add conditional keywords meta tag */}
        {keywords && <meta name="keywords" content={keywords} />}
        {/* favicon block for all devices */}
        <link rel="icon" type="image/png" href="/Images/favicon/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/Images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/Images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Images/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bhasha.io" />
        <link rel="manifest" href="/Images/favicon/site.webmanifest" />
        {/* End of Favicon Block */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <div className={`${inter.className}`}>
        <div
          className="!m-auto !text-start"
          style={{
            fontSize: "18px",
            fontWeight: "400",
            maxWidth: "920px",
            padding: "2rem 1rem 0rem",
          }}
        >
          <Link
            className={` ${isMobile ? '' : 'font-base/6'}`}
            style={{
              color: '#4B2AAD',
              fontWeight: 500,
              fontSize: isMobile ? '0.832rem' : '0.875rem',
              textDecoration: 'none',
            }}
            href="/resources"
          >
            Resources
          </Link>
          <Link
            href={`/resources/${subCategory.split(" ").join("").toLowerCase()}`}
            className={` ${isMobile ? '' : 'font-base/6'}`}
            style={{
              color: '#4B2AAD',
              fontWeight: 500,
              fontSize: isMobile ? '0.832rem' : '0.875rem',
              textDecoration: 'none',
            }}
          >{` > ${subCategory}`}</Link>
          <Link
            href={`/resources/${subCategory.split(" ").join("").toLowerCase()}/${category.split(" ").join("").toLowerCase()}`}
            className={` ${isMobile ? '' : 'font-base/6'}`}
            style={{
              color: '#4B2AAD',
              fontWeight: 500,
              fontSize: isMobile ? '0.832rem' : '0.875rem',
              textDecoration: 'none',
            }}
          >{` > ${category}`}</Link>
        </div>
        <h1
          style={{
            textAlign: "start",
            padding: "1rem",
            maxWidth: "920px",
            margin: "auto",
            lineHeight: lineHeight,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            textAlign: "start",
            padding: "0rem 1rem",
            maxWidth: "920px",
            margin: "auto",
            fontWeight:"600",
          }}
        >
          {title}
        </p>
        <div
          style={{
            color: "rgba(151, 151, 151, 1)",
            display: "flex",
            // justifyContent: "space-between",
            gap:"1rem",
            textAlign: "start",
            padding: "1rem",
            maxWidth: "920px",
            margin: "auto",
            fontSize: "16px",
            fontWeight: "500",
            flexWrap: "wrap",
          }}
        >
          {/* <span>Bhasha.io Team</span> */}
          <div>
            <span>Published: </span>
            <span>{formattedDate}</span>
          </div>
          <div>
            <span>{time} mins read</span>
          </div>
          <ShareButton title={title} text="Check out this page!" url={fileName} />
        </div>
      </div>
    </>
  );
}
