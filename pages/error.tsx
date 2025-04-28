"use client";
// import Head from "next/head";
import router, { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import MetaManager from "../components/MetaManager";

export default function Error() {
//   const router = useRouter();
  return (
    <>
      <MetaManager
        pageTitle="Learn an Indian Language. Speak like a native"
        pageDescription="Learn an Indian Language - Anytime, Anywhere! 1-On-1 Personal Coach. Flexible Timings. Course Certificate. Call +91-6366936952 to Enroll Today."
        pageURL="https://bhasha.io/error"
        pageKeywords=""
      />
      {/* <Head>
        <title>Learn an Indian Language. Speak like a native</title>
        <meta
          name="description"
          key= "description"
          content="Learn an Indian Language - Anytime, Anywhere! 1-On-1 Personal Coach. Flexible Timings. Course Certificate. Call +91-6366936952 to Enroll Today."
          ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/bhasha-logo-small.webp" />
      </Head> */}
      <Navbar />
      <div
        className="!flex !justify-center !flex-col !text-center"
        style={{ height: "90vh", width: "100vw" }}
      >
        <h2 className="!mb-2">Something went wrong!</h2>
        <button
          type="button"
          className="text-white bg-[#4B2AAD] !p-4 !px-6 !rounded-full !border-0 !mx-auto !text-lg cursor-pointer"
          style={{ width: "250px", textDecoration:"none", boxShadow: "0px 4px 4px rgba(0, 4, 4, 0.25)" }}
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => router.push("/")
            // () => window.location.href = "/"
          }
        >
          Go to home
        </button>
      </div>
    </>
  );
}
