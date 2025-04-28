const withMDX = require('@next/mdx')()
const withFlowbiteReact = require("flowbite-react/plugin/nextjs");
 
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
}
 
module.exports = withFlowbiteReact(withMDX(nextConfig))