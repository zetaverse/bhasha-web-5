import Head from "next/head";
import Navbar from "../../../components/Navbar";
import BlogCard from "../../../components/BlogCard";
import Pagination from "../../../components/Pagination";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { resourcetype, articleList } from "../../../utilities/utilities";
import Error from "../../404";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AllLanguages({ subCategory, list, error }: { subCategory: string, list: any, error: boolean }) {
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
    ? "All Learning Guides"
    : "All Learner Stories";

  return (
    <div className="allContent sm:!pb-12">
      <Head>
        <title>Bhasha.io Blog - All Languages {subCategory}</title>
        <meta name="description" content={`Explore all ${h1Text.toUpperCase()}.`} />
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
        <div className={`!flex !justify-between items-center !mb-4 ${inter.className}`}>
        <h1 className="font-semibold text-start text-nowrap">{h1Text}</h1>
        </div>

        <div className="!grid gap-12" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
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
            <div className=" grow-0 shrink-0 basis-auto w-full text-center my-4">
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

AllLanguages.getInitialProps = async ({ query }: { query: any }) => {
  const { slug } = query; 
  let error = true;
  let list: any[] = [];
  let subCategory: string = "";

  if (resourcetype.includes(slug)) {
    error = false;

    if (slug === "learnerstories") {
      subCategory = "Learner Stories";
      list = articleList.filter((item: any) => item.subCategory === subCategory);
    }
    if (slug === "learningguides") {
      subCategory = "Learning Guides";
      list = articleList.filter(item => item.subCategory === subCategory);
    }
  }

  return {  subCategory, list, error }; 
};
