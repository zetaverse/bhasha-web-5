"use client"
import Link from "next/link";
import Script from "next/script";
import BiginForm from "../components/BiginForm";
import Navbar from "../components/Navbar";
import MetaManager from "../components/MetaManager";
import { UTMContext } from "../Context/UTMContext";
import { useEffect, useContext } from "react";

export default function ContactUs({utm_source, utm_medium, utm_campaign}: {utm_source: string, utm_medium: string, utm_campaign: string}) {
  const {UTMSource, UTMMedium, UTMCampaign, setUTMSource, setUTMMedium, setUTMCampaign} = useContext(UTMContext);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: "https://bhasha.io/contact-us",
    name: "Contact the Bhasha.io Team for Language Solutions",
    description:
      "Have questions or need support? Contact the Bhasha.io team for all your language-related needs. Connect with us at +91-6366936952 or write to us at hello@bhasha.io",
    mainEntity: {
      "@type": "Organization",
      name: "Bhasha.io",
      url: "https://bhasha.io",
      Logo:
        "https://bhasha.io/_next/image?url=%2FImages%2FBhashaLogo.png&w=640&q=75",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-6366936952",
        email: "hello@bhasha.io",
        contactType: "customer support",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "DNO-145/118, BLDG EAST END B MAIN, 9 BLK JAYANAGAR, BANGALORE, Bengaluru (Bangalore) Urban, Karnataka, 560069",
        addressLocality: "Bengaluru",
        addressRegion: "BLR",
        postalCode: "560069",
        addressCountry: "IND",
      },
      sameAs: [
        "https://www.facebook.com/bhashaApp/",
        "https://www.instagram.com/bhasha.io/",
        "https://www.linkedin.com/company/bhasha-io",
      ],
    },
  };

  useEffect(() => {
    if (utm_source || utm_medium || utm_campaign) {
      setUTMSource(() => utm_source);
      setUTMMedium(() => utm_medium);
      setUTMCampaign(() => utm_campaign);
    }
  }, [utm_source, utm_medium, utm_campaign]);

  return (
    <>
      <MetaManager
        pageTitle="Contact Bhasha.io for Personalized Language Learning Classes"
        pageDescription="Get in touch with Bhasha.io for personalized language learning classes, corporate classes, and more. Contact us for inquiries or to book a demo class today!"
        pageURL="https://bhasha.io/contact-us"
        pageKeywords="Contact Us, Bhasha.io"
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Navbar />

      <div className="lg:!m-12 overflow-hidden">
        <section id="contact-us" className="!max-w-15/16 lg:!px-6 !py-2 !w-full !mx-auto lg:!my-12">
          <h1 className="text-center !mb-2 py-2 sm:!pt-0 sm:!pb-4">Contact Us</h1>
          <p className="!text-center !mb-0 sm:!px-12">
          The team at Bhasha.io is dedicated to helping you{" "}
           <a href="/"
           style={{ color: "#4B2AAD", textDecoration: "underline" }}>learn Indian languages</a> through personalized classes.</p>
          <p className="!text-center sm:!px-12 !mb-4">
            Whether you're eager to inquire about our one-to-one classes and
            corporate batches, explore career opportunities, or collaborate with
            us, our team is here to assist you every step of the way.
          </p>
          <div className="!ps-12 pe-6 !py-0 !flex !flex-wrap !mt-0 !-ms-12 !justify-center">
            {/* Contact Info */}
            <div className="!px-6  w-full lg:!w-5/12 !grow-0 !shrink-0 !flex-auto !order-2 lg:!order-1 !mx-12 lg:!mt-4">
              <div className="border border-[#0000002d] rounded-md  bg-white !bg-clip break-words text-[#212529] min-w-0 flex flex-col relative !my-4 ">
                {/* title spacer py-2 */}
              <div className="!pt-4 !pb-6 grow shrink basis-auto !flex !flex-col !items-center font-medium"
              style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                </svg>
                <span style={{ fontSize: "18px" }}>Contact</span>
                <Link
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    href="tel:+91-6366936959"
                  >
                  <span className="text-base">+91-6366936959</span>
                </Link>
                <Link
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    href="tel:+91-6366936553"
                  >
                    <span className="text-base">+91-6366936553</span>
                  </Link>
                </div>
              </div>

              {/* Email */}
              <div className="border border-[#0000002d] rounded-md !bg-clip- bg-white break-words text-[#212529] min-w-0 flex flex-col relative !my-4">
                <div className="!py-4 !px-4  grow shrink basis-auto !flex !flex-col !items-center  font-medium"
                style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <span style={{ fontSize: "18px" }}>Email</span>
                  <Link
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    href="mailto:hello@bhasha.io"
                  >
                    <span className="text-base">hello@bhasha.io</span>
                  </Link>
                  <Link
                    className="text-black"
                    style={{ textDecoration: "none" }}
                    href="mailto:ops@bhasha.io"
                  >
                    <span className="text-base">ops@bhasha.io</span>
                  </Link>
                </div>
              </div>

              <div className="border border-[#0000002d] rounded-md !bg-clip- bg-white break-words text-[#212529] min-w-0 flex flex-col relative !my-4">
                <div className="!py-4 !px-6 grow shrink basis-auto  !flex !flex-col !items-center  font-medium "
                style={{ boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)"
                 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                 className="bi bi-house-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                  </svg>
                  <span style={{ fontSize: "18px"}}>Address</span>
                  <span className="text-center" style={{ fontSize: "16px" }}>
                    DNO-145/118, BLDG EAST END B MAIN, 9 BLK JAYANAGAR,
                    BANGALORE, Bengaluru (Bangalore) Urban, Karnataka, 560069
                  </span>
                </div>
              </div>
            </div>
            {/* </div> */}

            {/* Form */}
            <div className="!w-full !grow-0 !shrink-0 !basis-auto lg:!w-5/12 !order-1 lg:!order-2 !pt-4 !px-6 !m-4"
            style={{
              backgroundColor: "#F6F6F6",
              maxWidth: "400px",
              borderRadius: "8px",
              boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)"
            }}>
              <BiginForm
                UTMSource={UTMSource}
                UTMMedium={UTMMedium}
                UTMCampaign={UTMCampaign}
                displayTitle
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

ContactUs.getInitialProps = async ({ query }: { query: { utm_source: string, utm_medium: string, utm_campaign: string } }) => {
  const { utm_source, utm_medium, utm_campaign } = query;
  return { utm_source, utm_medium, utm_campaign };
};
