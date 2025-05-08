import Head from "next/head";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import BlogCard from "../../../components/BlogCard";
import Pagination from "../../../components/Pagination";
import Error from "../../404";
import { resourcetype, articleList, languages } from "../../../utilities/utilities";
import { Inter } from "next/font/google";
import Breadcrumbs from "../../../components/Breadcrumbs";
import LearningGuide from "../../../components/LearningGuide";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Resources({ subCategory, list, error }: { subCategory: string, list: any, error: boolean }) {
  if (error) {
    return <Error />;
  }

  console.log(list)
  let subtext1, subtext2, linktext, linkUrl="", subtext3;

  if (subCategory === "Learning Guides") {
    subtext1 = "Our comprehensive Learning Guides aim to provide you with the tools, tips, and strategies you need to accelerate your language learning journey.";
    subtext2 = "Whether you're a beginner looking to build a solid foundation or an advanced learner seeking to refine your skills, our guides cover a wide range of topics to cater for your learning needs. From grammar essentials to conversational techniques, our blogs along with our";
    linktext = "Indian language courses";
    linkUrl = "/";
    subtext3 = "provide you with exactly what you need to become a proficient speaker.";
  }
  
  if (subCategory === "Learner Stories") {
    subtext1 = "Discover the stories of individuals who have embarked on transformative language-learning journeys for various compelling reasons.";
    subtext2 = "From personal growth to career advancement, our collection of Learner Stories showcases the power of language in shaping lives and bridging cultures. Be inspired by these real-life learners as they share their experiences with our";
    linktext = "online Indian language classes";
    linkUrl = "/";
    subtext3 = ".";
  }

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginate = (items: any, pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const paginatedPosts = paginate(list, currentPage, pageSize);

  // const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="allContent sm:!pb-12">
      <Head>
      <title>{subCategory} - Bhasha.io</title>
      <meta name="description" content={`Explore our ${subCategory}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="google" content="notranslate" />
        <link
          rel="canonical"
          href={`https://bhasha.io/resources/${subCategory}`}
        />
        {/* favicon block for all devices */}
        <link rel="icon" type="image/png" href="/Images/favicon/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/Images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/Images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Images/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Bhasha.io" />
        <link rel="manifest" href="/Images/favicon/site.webmanifest" />
        {/* End of Favicon Block */}
      </Head>
      <Navbar />
      <div 
        className="allContent" 
        style={{ 
          maxWidth: "1315px", 
          margin: "0 auto", 
          padding: "2rem",
          width: "100%" 
        }}
      >
        <Breadcrumbs />
        <h1 className={`font-semibold text-start text-nowrap ${inter.className}`} style={{ margin: "0", padding: "0", width: "36%" }}>{subCategory}</h1>
        <p className={`font-normal text-base/6 text-start ${inter.className} !my-6`} style={{ width: "100%" }}>{subtext1}</p>
        <p className={`font-normal text-base/6 text-start ${inter.className} !my-6`} style={{ width: "100%" }}>
          {subtext2} <Link href={linkUrl} style={{textDecoration:"none"}}>{linktext}</Link> {subtext3}
        </p>
        {subCategory === "Learning Guides" ? (<LearningGuide cardCount={languages.length} showViewAll={false} />) : null}

        <div className="!mb-12">
          <div className={`!flex !justify-between !items-center !mb-4 ${inter.className}`}>
            <h2 className={`mb-0`} style={{ padding: '0.25rem 0', fontWeight: 700 }}>{subCategory}</h2>
            <Link
              className="text-[#4B2AAD] text-xl/7.5 !mt-1"
              style={{ textDecoration: "none", fontWeight: 700 }}
              href={`/resources/${subCategory.split(' ').join('').toLowerCase()}/all-languages`}
            >
              View all
            </Link>
          </div>
          <div className="!grid !gap-12" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {subCategory === "Learner Stories" ? (
              list.map((item: any) => (
                <div key={item.fileName}>
                  <BlogCard
                    blogURL={item.fileName}
                    imageURL={item.imageURL}
                    blogsubCat={subCategory}
                    blogCat={item.category}
                    tags={item.tags}
                    blogTitle={item.title}
                    previewText={item.previewText}
                  />
                </div>
              ))
            ) : (
              paginatedPosts.slice(0, isTablet ? 4 : 3).map((item: any) => ( 
                <div key={item.fileName}>
                  <BlogCard
                    blogURL={item.fileName}
                    imageURL={item.imageURL}
                    blogsubCat={subCategory}
                    blogCat={item.category}
                    tags={item.tags}
                    blogTitle={item.title}
                    previewText={item.previewText}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        {subCategory === "Learner Stories" && (
          <Pagination
            items={list.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
}

Resources.getInitialProps = async ({ query }: { query: any }) => {
  const resourceType = query.slug;
  let error = true;
  let list: any[] = [];
  let subCategory: string;

  if (resourcetype.includes(resourceType)) {
    error = false;
    if (resourceType === "learnerstories") {
      list = articleList.filter((item) => item.subCategory === "Learner Stories");
      subCategory = "Learner Stories";
    }
    if (resourceType === "learningguides") {
      list = articleList.filter((item) => item.subCategory === "Learning Guides");
      subCategory = "Learning Guides";
    }
  }

  return { subCategory: "", list, error };
};
