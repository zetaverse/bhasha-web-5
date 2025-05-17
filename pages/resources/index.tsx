import Head from "next/head";
import Navbar from "../../components/Navbar";
import BlogCatagoryCard from "../../components/BlogCatagoryCard";
import { articleList } from "../../utilities/utilities";
import LearningGuide from "../../components/LearningGuide";
import { Inter } from "next/font/google";
import Breadcrumbs from "../../components/Breadcrumbs";
import FooterNew from "../../components/Footer-New";
// import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ResourceCenter() {
  const learningGuides = articleList.filter((blog) => blog.subCategory === "Learning Guides");
  const learnerstories = articleList.filter((blog) => blog.subCategory === "Learner Stories");

  // const [isMobile, setIsMobile] = useState(false);
  // const [isTablet, setIsTablet] = useState(false);
  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     setIsMobile(width < 768);
  //     setIsTablet(width >= 768 && width <= 1024);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Language Learning Resources & Tips | Bhasha.io</title>
        <meta
          name="description"
          content="Explore Bhasha.io's resources for language learners. Read learner stories, guides, and tips on mastering Indian languages. Start your language journey with us!"
        />
        <meta name="keywords" content="Language Learning Resources, Tips, Bhasha.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <link rel="canonical" href="https://bhasha.io/resources" />
      </Head>
      <Navbar />
      <div 
        className="allContent" 
        style={{ 
          maxWidth: "1315px", 
          margin: "0 auto", 
          padding:"2rem",
          width: "100%"
        }}
      >
        <Breadcrumbs />

        <h1 className={`font-semibold text-start ${inter.className} grow-0 shrink-0 basis-auto !mb-6 w-full sm:w-2/3 text-nowrap`}>
          Resource Center
        </h1>
        
        <p className={`font-normal text-base/6 text-start ${inter.className} !my-6`} style={{ width: "100%" }}>
          Explore the World of <a href="/" className="text-[#4B2AAD]" style={{ textDecoration: "none" }}>Indian Language Learning</a> with us!
        </p>
        <p className={`font-normal text-base/6 text-start ${inter.className} !my-6`} style={{ width: "100%" }}>
          Delve into our blogs to read inspiring Learner Stories, discover invaluable Learning Guides, and uncover fascinating facts and stories about the languages we cherish. Whether you're seeking motivation, guidance, or simply a dose of language-related trivia, our resources are here to enrich your learning experience. Start exploring now and let the adventure begin!
        </p>
        {learningGuides.length > 0 && <LearningGuide cardCount={5} showViewAll={true} />}
        {learnerstories.length > 0 && <BlogCatagoryCard subCategory="Learner Stories" blogList={learnerstories} />}
      </div>
      <FooterNew/>
    </>
  );
}