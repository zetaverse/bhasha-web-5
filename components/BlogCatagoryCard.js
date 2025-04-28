import Link from 'next/link';
import BlogCard from './BlogCard';
import { Inter } from "next/font/google";
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

const isTablet = () => {
  return window.innerWidth >= 768 && window.innerWidth < 1024; 
};

export default function BlogCategoryCard(props) {
  const { subCategory, blogList } = props;
  const [cardCount, setCardCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (isTablet()) {
        setCardCount(4); 
      } else {
        setCardCount(3); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  return (
    <div className="!mb-12">
      <div className={`!flex !justify-between !items-center !mb-4 ${inter.className}`}>
        <h2 className={`!mb-0`} style={{ padding: '0.25rem 0', fontWeight: 700 }}>
          {subCategory}
        </h2>
        <Link 
          className="text-[#4B2AAD] !text-xl/7.5 !mt-1" 
          style={{ textDecoration: "none", fontWeight: 700 }} 
          href={`/resources/${subCategory.split(' ').join('').toLowerCase()}`}
        >
          View all
        </Link>
      </div>
      <div 
        className="!grid !gap-12" 
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }} 
      >
        {blogList
          .filter((_, idx) => idx < cardCount)
          .map((blogitem) => (
            <div key={blogitem.title}>
              <BlogCard
                imageURL={blogitem.imageURL}
                blogsubCat={subCategory}
                blogCat={blogitem.category}
                tags={blogitem.tags}
                blogTitle={blogitem.title}
                blogURL={blogitem.fileName}
                previewText={blogitem.previewText}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
