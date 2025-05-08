import Head from "next/head";
import Navbar from "../../../components/Navbar";
import BlogCard from "../../../components/BlogCard";
import Pagination from "../../../components/Pagination";
import Breadcrumbs from "../../../components/Breadcrumbs";
import {articleList, languages } from "../../../utilities/utilities";
import Error from "../../404";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Resources({ subCategory, category, list, error }: { subCategory: string, category: string, list: any, error: boolean }) {
  if (error) {
    return <Error />;
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

  const h1Text = subCategory === "Learning Guides" 
    ? `${category} Guide`
    : `${category} Stories`;

  return (
    <div className="allContent sm:!pb-12">
      <Head>
        <title>Language Learning Resources & Tips | Bhasha.io	 - {category}</title>
        <meta name="description" content="Explore Bhasha.io's resources for language learners. Read learner stories, guides, and tips on learning Indian languages. Start your language journey with us!" />
        <meta name="keywords" content="Indian Language Learning Resources, Language learning tips, Bhasha.io"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/Testimonials/Bhasha-Logo-small.png" />
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
        <div className="!mb-12">
        <div className={`!flex !justify-between !items-center !mb-4 ${inter.className}`}>
        <h1 className="!font-semibold !text-start !text-nowrap" style={{textTransform:"capitalize"}}>{h1Text}</h1>
        </div>

        <div className="!grid !gap-12" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((item: any) => (
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
            <div className="grow-0 shrink-0 basis-auto w-full !text-center !my-4">
              <p>No blogs uploaded in this category yet.</p>
            </div>
          )}
        </div>
        </div>

        {paginatedPosts.length > 0 && (
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
  const { slug, category } = query; 
  let error = true;
  let list: any[] = [];
  let subCategory;

  const Category = category.toLowerCase().replace(/\s+/g, '');

  if (languages.includes(category)) {
    error = false;

    if (slug === "learnerstories") {
      list = articleList.filter((item) => 
        item.subCategory === "Learner Stories" && 
        item.category.toLowerCase().replace(/\s+/g, '') === Category
      );
      subCategory = "Learner Stories";
    }
    if (slug === "learningguides") {
      list = articleList.filter((item) => 
        item.subCategory === "Learning Guides" && 
        item.category.toLowerCase().replace(/\s+/g, '') === Category
      );
      subCategory = "Learning Guides";
    }
  }

  return { subCategory, category, list, error }; 
};
