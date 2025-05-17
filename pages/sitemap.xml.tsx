import { articleList, languages } from "../utilities/utilities";

function generateSiteMap(allBlogs: any, allLanguages: any) {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<url>
<loc>https://bhasha.io/</loc>
<lastmod>2023-05-27T13:59:46+00:00</lastmod>
<priority>1.00</priority>
</url>
${allLanguages.map((eachLanguage: any)=>{
    return `
    <url>
    <loc>https://bhasha.io/online-${eachLanguage}-classes</loc>
    <lastmod>2023-05-27T13:59:46+00:00</lastmod>
    <priority>0.80</priority>
    </url>
    `
})}
<url>
<loc>https://bhasha.io/testimonials</loc>
<lastmod>2023-05-27T13:59:46+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://bhasha.io/contact-us</loc>
<lastmod>2023-05-27T13:59:46+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://bhasha.io/privacy-policy</loc>
<lastmod>2023-05-27T13:59:46+00:00</lastmod>
<priority>0.80</priority>
</url>
<url>
<loc>https://bhasha.io/resources</loc>
<lastmod>2023-05-27T13:59:46+00:00</lastmod>
<priority>0.80</priority>
</url>
${allBlogs.map((eachBlog: any)=>{
    return `
    <url>
<loc>https://bhasha.io/blog/${eachBlog.fileName}</loc>
<lastmod>${eachBlog.date}</lastmod>
<priority>0.80</priority>
</url>
    `;
})
.join('')}
</urlset>`;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
  }

  export async function getServerSideProps({ res }: any) {
    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(articleList, languages);
  
    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default SiteMap;