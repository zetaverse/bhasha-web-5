const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  images: {
    deviceSizes: [750, 1080, 1200],
    imageSizes: [128, 256, 384],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'assets.tina.io',
  //     },
  //   ],
  // },
  async redirects() {
    return [
      {
        source: '/blog/beginner-guide-how-to-learn-kannada-through-english',
        destination: '/blog/learn-kannada-through-english',
        permanent: true, // this is what makes it a 301 redirect
      },
      // You can add more redirects as needed:
    //   {
    //     source: '/old-blog/:slug',
    //     destination: '/blog/:slug',
    //     permanent: true,
    //   }
    ]
  },
}
 
module.exports = withMDX(nextConfig)