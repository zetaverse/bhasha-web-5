import Image from "next/legacy/image";
import Link from "next/link";
import style from "./BlogCard.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function BlogCard({ blogURL, imageURL, blogsubCat, tags, blogCat, blogTitle, previewText = " " }) {
  const formatURL = (str) => str.toLowerCase().replace(/\s+/g, '');

  return (
    // <Link href={`/blog/${blogURL}`} className="text-decoration-none">
      <div 
        className="!flex !flex-col !border !border-[#DEE2E6]" 
        style={{ 
          width: "100%", 
          maxWidth: "620px", 
          boxShadow: "0px 3px 2px rgba(0, 0, 0, 0.25)", 
          display: 'flex', 
          height: '100%', 
        }} 
      >
        <Link href={`/blog/${blogURL}`}
        style={{ textDecoration: "none" }}
        passHref>
        <div style={{ position: "relative", overflow: "hidden"}}> 
          <Image
            src={imageURL}
            height={160}
            width={340}
            layout="responsive"
            // layout='fill'
            alt={blogTitle}
            // style={{ objectPosition: 'center',objectFit:"contain" }}
          />
        </div>
        </Link>
        <div className="!m-2 !mb-6" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="!flex !items-center !mx-2">
            <Link 
              href={`/resources/${formatURL(blogsubCat)}/${formatURL(blogCat)}`}
              className={`${style.blogCategory} !py-2 ${inter.className}`} 
              style={{ color: '#4B2AAD', fontWeight: 700, textDecoration: 'none' }}
            >
              {blogCat.toUpperCase()}
            </Link>
            <span style={{ color: "#4B2AAD",fontSize: "14px !important",fontWeight: "450" }}>|</span>
            <Link 
              href={`/resources/${formatURL(blogsubCat)}`}
              className={`${style.blogCategory} !py-2 ${inter.className}`} 
              style={{ color: '#4B2AAD', fontWeight: 700, textDecoration: 'none' }}
            >
              {blogsubCat.toUpperCase()}
            </Link>
          </div>
          <Link href={`/blog/${blogURL}`} style={{ textDecoration: "none" }} passHref>
          <div className={`${style.blogTitle} !p-2 ${inter.className}`} style={{ textAlign: 'left', fontWeight: 700 }}>
            <span>{blogTitle}</span>
          </div>
          <div className={`!p-2 ${inter.className}`} style={{ color: 'black', fontSize: '0.875rem', textAlign: 'left' }}>
            <span>{`${previewText.slice(0, 250)}${previewText.length > 250 ? "..." : ""}`}</span>
          </div>
          </Link>
          <div style={{ textAlign: 'left' }}>
            <Link 
              href={`/blog/${blogURL}`} 
              className={` ${inter.className} !p-2`} 
              style={{ 
                fontSize: '0.8rem', 
                color: '#4B2AAD', 
                fontWeight: "700",
                textDecoration: "none" 
              }}
            >
              READ MORE →
            </Link>
          </div>
        </div>
      </div>
   // </Link>
  );
}
