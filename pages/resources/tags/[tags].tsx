import Head from "next/head";
import Navbar from "../../../components/Navbar";
import BlogCard from "../../../components/BlogCard";
import Pagination from "../../../components/Pagination";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { articleList } from "../../../utilities/utilities";
import Error from "../../404";
import { useState } from "react";
import { Inter } from "next/font/google";
import FooterNew from "../../../components/Footer-New";

const inter = Inter({ subsets: ["latin"] });


export default function Tags({ tags, list, error }: { tags: string, list: any[], error: boolean }) {
  if (error) {
    return <Error />;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginate = (items: any[], pageNumber: number, pageSize: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const paginatedPosts = paginate(list, currentPage, pageSize);

  const h1Text = tags ? `Blogs with tag: ${tags}` : "All Articles";

  return (
    <div className="allContent sm:!pb-12">
      <Head>
        <title>Bhasha.io Blog - Tags</title>
        <meta name="description" content="Explore all resources based on tags." />
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
          width: "100%",
        }}
      >
        <Breadcrumbs />
        <div className="!mb-12">
          <div className={`!flex !justify-between !items-center !mb-3 ${inter.className}`}>
            <h1 className="!font-semibold !text-start !text-nowrap !mb-6" style={{textTransform:"capitalize"}}>{h1Text}</h1>
          </div>

          <div className="!grid !gap-12" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((item) => (
                <div key={item.fileName}>
                  <BlogCard
                    blogURL={item.fileName}
                    imageURL={item.imageURL}
                    blogsubCat={item.subCategory}
                    blogCat={item.category}
                    tags={item.tags}
                    blogTitle={item.title}
                    previewText={item.previewText}
                  />
                </div>
              ))
            ) : (
              <div className="!grow-0 !shrink-0 !basis-auto !w-full !text-center !my-4">
                <p>No blogs found with the specified tag(s).</p>
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
      <FooterNew/>
    </div>
  );
}

Tags.getInitialProps = async ({ query }:any) => {
  const { tags } = query;
  let error = true;
  let list: any[] = [];

  if (tags) {
    const tagsArray = tags.split(",").map((tag: string) => tag.trim().toLowerCase());
    list = articleList.filter((item) =>
      tagsArray.every((tag: string) => item.tags.map((t: string) => t.toLowerCase()).includes(tag))
    );
    if (list.length > 0) {
      error = false;
    }
  }

  return { tags, list, error };
};
