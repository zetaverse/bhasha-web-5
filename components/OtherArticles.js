import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { articleList } from "../utilities/utilities";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function OtherArticles({ filename }) {;
  const [cardCount, setCardCount] = useState(3);
  const [marginSize, setMarginSize] = useState("1rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) { 
        setCardCount(4);
        setMarginSize("1.5rem");
      } else if (window.innerWidth >= 1024) { 
        setCardCount(3);
        setMarginSize("0");
      } else {
        setCardCount(3);
        setMarginSize("0rem 1.5rem");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentArticle = articleList.find((article) => article.fileName === filename);
  const currentCategory = currentArticle?.category;
  const currentSubCategory = currentArticle?.subCategory;

  const sameCategoryLearnerStories = articleList.filter((article) => article.fileName !== filename && article.category === currentCategory && article.subCategory === "Learner Stories");
  const differentCategoryLearnerStories = articleList.filter((article) => article.fileName !== filename && article.category !== currentCategory && article.subCategory === "Learner Stories");
  const sameCategoryOtherArticles = articleList.filter((article) => article.fileName !== filename && article.category === currentCategory && article.subCategory !== "Learner Stories");
  const differentCategoryOtherArticles = articleList.filter((article) => article.fileName !== filename && article.category !== currentCategory && article.subCategory !== "Learner Stories");
  
  const displayedArticles = [
    ...(currentSubCategory === "Learner Stories" ? sameCategoryLearnerStories : sameCategoryLearnerStories.slice(0, 2)),
    ...differentCategoryLearnerStories.slice(0,currentSubCategory === "Learner Stories" ? Math.max(0, cardCount - sameCategoryLearnerStories.length) : Math.max(0, 2 - sameCategoryLearnerStories.length)),
    ...sameCategoryOtherArticles.slice(0,cardCount - (currentSubCategory === "Learner Stories" ? sameCategoryLearnerStories.length : 2)),
    ...differentCategoryOtherArticles.slice(0,cardCount - (currentSubCategory === "Learner Stories" ? sameCategoryLearnerStories.length + differentCategoryLearnerStories.length : 2))].slice(0, cardCount);

  return (
    <>
      <br />
      <hr style={{ padding: "0 1rem", maxWidth: "920px", margin: "auto" }} />
      <br />
      <div
        className={`${inter.className}`}
        style={{
          fontSize: "30px",
          fontWeight: "700",
          lineHeight: "44px",
          maxWidth: "920px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        Read these Articles next
      </div>
      <br />
      <div style={{ maxWidth: "1100px", margin: "auto", paddingBottom: "5rem" }}>
        <div
          className="!grid !gap-12"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: marginSize, 
          }}
        >
          {displayedArticles.map((article) => (
              <div key={article.fileName} style={{ margin: marginSize }}>
                <BlogCard
                  blogURL={article.fileName}
                  imageURL={article.imageURL}
                  blogsubCat={article.subCategory}
                  blogCat={article.category}
                  tags={article.tags}
                  blogTitle={article.title}
                  previewText={article.previewText}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
