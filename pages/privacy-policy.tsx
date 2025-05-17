// import Head from 'next/head';
import Navbar from "../components/Navbar";
import MetaManager from "../components/MetaManager";
import { Inter } from "next/font/google";
import FooterNew from "../components/Footer-New";

const inter = Inter({ subsets: ["latin"] });

export default function PrivacyPolicy() {
  return (
    <>
      <MetaManager
        pageTitle="Privacy Policy | Bhasha.io"
        pageDescription="Learn how Bhasha.io collects, uses, and protects your personal data. Understand your rights and our practices for ensuring privacy and security."
        pageURL="https://bhasha.io/privacy-policy"
        pageKeywords="Privacy Policy, Bhasha.io"
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
      <div className="allContent">
        <Navbar />
        <div className="!m-2 lg:!mx-12 lg:!px-12 overflow-hidden">
          <section id="privacy-policy" className={`lg:!p-1 ${inter.className}`} style={{maxWidth:"1100px", margin:"0 auto"}}>
            <br/>
            <h1 className="text-[#4B2AAD] !mb-2">
              {"Privacy Policy  ".toUpperCase()}
            </h1>
            <p className="text-[#212529] opacity-75 !mb-4">Last Updated: 18<sup>th</sup> November, 2024</p>
            <hr className="!my-4 bg-[#212529] !opacity-75"/>
            <h2 className="!mb-2 text-[#1A1715]">
              {"Section 1 – What do we do with your information?".toUpperCase()}
            </h2>
            <p className="!mb-4 text-[#212529] ">
              When you purchase something from our store, as part of the buying
              and selling process, we collect the personal information you give
              us such as your name, address and email address.
              <br />
              <br />
              When you browse our store, we also automatically receive your
              computer’s internet protocol (IP) address in order to provide us
              with information that helps us learn about your browser and
              operating system.
              <br />
              <br />
              Email marketing: With your permission, we may send you emails
              about our store, new products and other updates
              <br />
              <br />
            </p>
            <hr className="!my-4"/>
            <h2 className="!mb-2 text-[#1A1715]">{"Section 2 – Consent".toUpperCase()}</h2>
            <br/>
            <h3 className="!mb-2 text-[#1A1715]">How do you get my consent?</h3>
            <p className="!mb-4 text-[#212529] ">
              When you provide us with personal information to complete a
              transaction, verify your credit card, place an order, arrange for
              a delivery or return a purchase, we imply that you consent to our
              collecting it and using it for that specific reason only.
              <br />
              <br />
              If we ask for your personal information for a secondary reason,
              like marketing, we will either ask you directly for your expressed
              consent, or provide you with an opportunity to say no.
              <br />
              <br />
            </p>
            <h3 className="!mb-2 text-[#1A1715]">How do I withdraw my consent?</h3>
            <p className="!mb-4 text-[#212529] ">
              If after you opt-in, you change your mind, you may withdraw your
              consent for us to contact you, for the continued collection, use
              or disclosure of your information, at anytime, by contacting us at{" "}
              <span className="text-[#FF9D28]">hello@bhasha.io</span> with “Data
              Privacy Policy Request” in the subject line.
            </p>
            <hr className="!my-4"/>
            <h2 className="!mb-2 text-[#1A1715]">{"Section 3 – Disclosure".toUpperCase()}</h2>
            <p className="!mb-4 text-[#212529] ">
              We may disclose your personal information if we are required by
              law to do so or if you violate our Terms of Service.
              <br />
              <br />
            </p>
            <hr className="!my-4"/>
            <h2 className="!mb-2 text-[#1A1715]">{"Section 4 – Payment".toUpperCase()}</h2>
            <p className="!mb-4 text-[#212529] ">
              We use Razorpay for processing payments. We/Razorpay do not store
              your card data on their servers. The data is encrypted through the
              Payment Card Industry Data Security Standard (PCI-DSS) when
              processing payment. Your purchase transaction data is only used as
              long as is necessary to complete your purchase transaction. After
              that is complete, your purchase transaction information is not
              saved.
              <br />
              <br />
              Our payment gateway adheres to the standards set by PCI-DSS as
              managed by the PCI Security Standards Council, which is a joint
              effort of brands like Visa, MasterCard, American Express and
              Discover.
              <br />
              <br />
              PCI-DSS requirements help ensure the secure handling of credit
              card information by our store and its service providers.
              <br />
              <br />
              For more insight, you may also want to read terms and conditions
              of razorpay on https://razorpay.com
              <br />
              <br />
            </p>
            <hr className="!my-4"/>
            <h2 className="!mb-2 text-[#1A1715]">{"Section 5 – Third-Party services".toUpperCase()}</h2>
            <p className="!mb-4 text-[#212529] ">
              In general, the third-party providers used by us will only
              collect, use and disclose your information to the extent necessary
              to allow them to perform the services they provide to us.
              <br />
              <br />
              However, certain third-party service providers, such as payment
              gateways and other payment transaction processors, have their own
              privacy policies in respect to the information we are required to
              provide to them for your purchase-related transactions.
              <br />
              <br />
              For these providers, we recommend that you read their privacy
              policies so you can understand the manner in which your personal
              information will be handled by these providers.
              <br />
              <br />
              In particular, remember that certain providers may be located in
              or have facilities that are located a different jurisdiction than
              either you or us. So if you elect to proceed with a transaction
              that involves the services of a third-party service provider, then
              your information may become subject to the laws of the
              jurisdiction(s) in which that service provider or its facilities
              are located.
              <br />
              <br />
              Once you leave our store’s website or are redirected to a
              third-party website or application, you are no longer governed by
              this Privacy Policy or our website’s Terms of Service.
              <br />
              <br />
              Links
              <br />
              <br />
              When you click on links on our store, they may direct you away
              from our site. We are not responsible for the privacy practices of
              other sites and encourage you to read their privacy statements.
              <br />
              <br />
            </p>
            <hr className="!my-4"/>
            <h2 className="!mb-2 text-[#1A1715]">{"Section 6 – Security".toUpperCase()}</h2>
            <p className="!mb-4 text-[#212529] ">
              To protect your personal information, we take reasonable
              precautions and follow industry best practices to make sure it is
              not inappropriately lost, misused, accessed, disclosed, altered or
              destroyed.
              <br />
              <br />
            </p>
            <hr className="!my-4"  />
            <h2 className="!mb-2 text-[#1A1715]">{"Section 7 – Cookies".toUpperCase()}</h2>
            <p className="!mb-4 text-[#212529] ">
              We use cookies to maintain session of your user. It is not used to
              personally identify you on other websites.
              <br />
              <br />
            </p>
            <hr className="!my-4"  />
            <h2 className="!mb-2 text-[#1A1715]">{"Section 8 – Age Of Concent".toUpperCase()}</h2>
            <p className="!mb-4 text-[#212529] ">
              By using this site, you represent that you are at least the age of
              majority in your state or province of residence, or that you are
              the age of majority in your state or province of residence and you
              have given us your consent to allow any of your minor dependents
              to use this site.
              <br />
              <br />
            </p>
            <hr className="!my-4"  />
            <h2 className="!mb-2 text-[#1A1715]">
              {"Section 9 – Changes to this privacy policy".toUpperCase()}
            </h2>
            <p className="!mb-4 text-[#212529] ">
              We reserve the right to modify this privacy policy at any time, so
              please review it frequently. Changes and clarifications will take
              effect immediately upon their posting on the website. If we make
              material changes to this policy, we will notify you here that it
              has been updated, so that you are aware of what information we
              collect, how we use it, and under what circumstances, if any, we
              use and/or disclose it.
              <br />
              <br />
              If our store is acquired or merged with another company, your
              information may be transferred to the new owners so that we may
              continue to sell products to you.
              <br />
              <br />
            </p>
            <hr className="!my-4" />
            <h2 className="!mb-2 text-[#1A1715]">{"Questions and contact information".toUpperCase()}</h2>
            <p className="!mb-4 text-[#212529] ">
              If you would like to: access, correct, amend or delete any
              personal information we have about you, register a complaint, or
              simply want more information contact us on{" "}
              <span className="text-[#FF9D28]">hello@bhasha.io</span> with “Data
              Privacy Policy Request” in the subject line.
              <br />
              <br />
            </p>
          </section>
        </div>
        <FooterNew />
      </div>
    </>
  );
}
