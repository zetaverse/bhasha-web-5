// import Head from 'next/head';
import { useState, useEffect, useContext } from "react";
import dynamic from "next/dynamic";
// import Masonry from "react-responsive-masonry";
import { languages } from "../utilities/utilities";
import Review from "../components/review";
// import { reviews as HomeReviews } from '../utilities/HomeContent';
import { reviews as KannadaReviews } from "../utilities/kannada";
import CallBack from "../components/CallBack";
import { reviews as MalayamReviews } from "../utilities/malayalam";
import { reviews as BengaliReviews } from "../utilities/bengali";
import { reviews as HindiReviews } from "../utilities/hindi";
import { reviews as TeluguReviews } from "../utilities/telugu";
import { reviews as MarathiReviews } from "../utilities/marathi";
import { reviews as TamilReviews } from "../utilities/tamil";
import { reviews as EnglishReviews } from "../utilities/english";
import { reviews as PunjabiReviews } from "../utilities/punjabi";
import { reviews as GujaratiReviews } from "../utilities/gujarati";
// import HomeModal from "../components/HomeModal";
import Navbar from "../components/Navbar";
import MetaManager from "../components/MetaManager";
import { UTMContext } from "../Context/UTMContext";


const HomeModal = dynamic(() => import('../components/HomeModal'), {
  ssr: false,
})

// import dynamic from 'next/dynamic';
    
    // const ResponsiveMasonry = dynamic(
    //   () => import('react-responsive-masonry').then((mod) => mod.ResponsiveMasonry),
    //   {
    //     ssr: false,
    //     loading: () => <p>Loading...</p>,
    //   }
    // );
    
    const Masonry = dynamic(
      () => import('react-responsive-masonry').then((mod) => mod.default),
      {
        ssr: false,
        // loading: () => <p>Loading...</p>,
      }
    );

const InitialState = {
  allLang: true,
  Bengali: false,
  Kannada: false,
  Hindi: false,
  Malayalam: false,
  Marathi: false,
  Telugu: false,
  Tamil: false,
  English: false,
};

let allReviews = [
  ...KannadaReviews,
  ...MalayamReviews,
  ...BengaliReviews,
  ...HindiReviews,
  ...TeluguReviews,
  ...TamilReviews,
  ...MarathiReviews,
  // Filter out Punjabi and Gujarati reviews - uncomment below lines to re-include
  // ...PunjabiReviews,
  // ...GujaratiReviews,
];

const getReviews = (language: any) => {
  if (language === "malayalam") {
    return MalayamReviews;
  }
  if (language === "kannada") {
    return KannadaReviews;
  }
  if (language === "marathi") {
    return MarathiReviews;
  }
  if (language === "telugu") {
    return TeluguReviews;
  }
  if (language === "hindi") {
    return HindiReviews;
  }
  if (language === "bengali") {
    return BengaliReviews;
  }
  if (language === "english") {
    return EnglishReviews;
  }
  if (language === "tamil") {
    return TamilReviews;
  }
  if (language === "punjabi") {
    return PunjabiReviews;
  }
  if (language === "gujarati") {
    return GujaratiReviews;
  }
  return allReviews;
};

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function Testimonial({ feedback, lang, utm_source, utm_medium, utm_campaign }: { feedback: string, lang: string, utm_source: string, utm_medium: string, utm_campaign: string }) {
  // const allLanguages = languages.filter(
  //   (language) => language !== 'English' && language !== 'Tamil'
  // );
  const {UTMSource, UTMMedium, UTMCampaign, setUTMSource, setUTMMedium, setUTMCampaign} = useContext(UTMContext);

  const [displayState, setDisplayState] = useState<any>(InitialState);

  let shuffledReviews = [];

  function changeDisplay(language: any) {
    setDisplayState(() => ({
      allLang: false,
      bengali: false,
      kannada: false,
      hindi: false,
      malayalam: false,
      marathi: false,
      telugu: false,
      english: false,
      tamil: false,
    }));
    setDisplayState((currentState:any) => ({ ...currentState, [language]: true }));
  }
  useEffect(() => {
    if (lang) {
      changeDisplay(lang);
    } else {
      shuffledReviews = shuffleArray(allReviews);
      changeDisplay("allLang");
    }
    // if(utm_source || utm_medium || utm_campaign){
    //   setUTMSource(()=>utm_source)
    //   setUTMMedium(()=>utm_medium)
    //   setUTMCampaign(()=>utm_campaign);
    // }
  }, [lang]);

  return (
    <>
      <MetaManager
        pageTitle="Customer Testimonials & Reviews | Bhasha.io"
        pageDescription="Read real customer testimonials about Bhasha.io's language Courses. Discover how our platform has transformed communication for businesses and individuals alike."
        pageURL="https://bhasha.io/testimonials"
        pageKeywords="Bhasha Customer Testimonials, Bhasha Testimonials, Bhasha Reviews, Bhasha.io Reviews, Bhasha Classes Reviews"
      />
      {/* <Head> */}
      {/* <title>Hear from Our Satisfied Customers - Bhasha.io</title>
        <meta
          name="description"
          key= "description"
          content="Discover the success stories of our clients at Bhasha.io. Read testimonials and learn how our language solutions made a difference. Call us at +91-6366936952"
          ></meta> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/bhasha-logo-small.webp" />
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://bhasha.io/testimonials" />
      </Head> */}
      <div className="allContent">
        <Navbar />
        <div className="lg:!mx-12 lg:!px-12 overflow-hidden">
          <section id="allTestimonials" className="lg:!p-1">
            <div
              className={
                feedback
                  ? "shadow-sm !flex !flex-col !justify-center !text-center !p-4 !m-1 lg:!m-4 lg:!mb-12"
                  : "hidden"
              }
              style={{ backgroundColor: "#E6FFDA" }}
            >
              <h3 className="block" style={{ color: "#386C1F", fontWeight: "bold" }}>
                Congratulations on taking the first step to learning{" "}
                <span style={{ textTransform: "capitalize" }}>{lang}</span> with
                us!{" "}
              </h3>
              <p
                className="!p-4 !text-start sm:!text-center"
                style={{ color: "#386C1F" }}
              >
                We&apos;re excited to help you on your language learning
                journey. Our Program Advisor will be in touch with you shortly
                to provide more information and answer any questions you may
                have.
                <br />
                In the meantime, feel free to explore our Wall of Love to find
                out more about our learner experience.
                <br />
                You may also explore our other Indian language courses.
              </p>
            </div>
            <h1 className="!text-center !pt-6 !mb-2">Our Wall of Love ❤️</h1>
            <p
              className="!m-auto !p-4 !text-start sm:!text-center"
              style={{ maxWidth: "1060px" }}
            >
              Our testimonial page is filled with inspiring stories from
              language learners around the world who have achieved their
              language goals with our website. Join the community and start your
              own language learning journey today!
            </p>
            <div className="flex overflow-x-auto whitespace-nowrap gap-4 !px-4 !py-4 lg:flex-wrap lg:justify-center">
  <button
    type="button"
    className={`${
      displayState.allLang
        ? 'text-white bg-[#4B2AAD]'
        : 'text-[#4B2AAD] bg-[#ECF2FF]'
    } !px-6 !py-2 !rounded-full !border-0 !flex-shrink-0`}
    style={{ width: "175px",cursor: "pointer" }}
    onClick={() => changeDisplay("allLang")}
  >
    <span className="font-semibold text-[18px]">All languages</span>
  </button>

  {languages
    .filter(language => language !== 'punjabi' && language !== 'gujarati')
    .map((language) => (
      <button
        key={language}
        type="button"
        className={`${
          displayState[language]
            ? 'text-white bg-[#4B2AAD]'
            : 'text-[#4B2AAD] bg-[#ECF2FF]'
        } !px-6 !py-2 !rounded-full !border-0 !flex-shrink-0 capitalize cursor-pointer`}
        style={{ width: "160px" }}
        onClick={() => changeDisplay(language)}
      >
        <span className="font-semibold text-[18px]">{language}</span>
      </button>
  ))}
</div>


            <Masonry
              className={displayState.allLang ? "!hidden sm:!flex" : "!hidden"}
              columnsCount={3}
            >
              {allReviews.map((review) => (
                <Review
                  imageURL={review.imageURL}
                  name={review.name}
                  designation={review.designation}
                  review={review.review}
                  key={review.name}
                />
              ))}
            </Masonry>
            <div
              className={
                displayState.allLang
                  ? "!flex !flex-col sm:!hidden"
                  : "!hidden"
              }
            >
              {allReviews.map((review) => (
                <div
                  className="!p-6 lg:!p-4 !justify-center"
                  key={review.name}
                >
                  <Review
                    imageURL={review.imageURL}
                    name={review.name}
                    designation={review.designation}
                    review={review.review}
                  />
                </div>
              ))}
            </div>

            {/* Map over languages to create sections for each, filtered to exclude Punjabi and Gujarati */}
            {languages
              // Filter: Also exclude Punjabi and Gujarati from this rendering loop
              // To revert, remove the following .filter() line
              .filter(language => language !== 'punjabi' && language !== 'gujarati')
              .map((language) => {
              const allRev = getReviews(language);

              return (
                <>
                  <Masonry
                    className={
                      displayState[language] ? "!hidden sm:!flex" : "!hidden"
                    }
                    columnsCount={3}
                  >
                    {allRev.map((review:any) => (
                      <Review
                        imageURL={review.imageURL}
                        name={review.name}
                        designation={review.designation}
                        review={review.review}
                        key={review.name}
                      />
                    ))}
                  </Masonry>
                  <div
                    className={
                      displayState[language]
                        ? "!flex !flex-col sm:!hidden"
                        : "!hidden"
                    }
                  >
                    {" "}
                    {allRev.map((review:any) => (
                      <div
                        className="!p-4 !justify-center"
                        key={review.name}
                      >
                        <Review
                          imageURL={review.imageURL}
                          name={review.name}
                          designation={review.designation}
                          review={review.review}
                        />
                      </div>
                    ))}
                  </div>
                </>
              );
            })}
            <CallBack text1="Have questions for us?" modalId="HomeModal" />
          </section>
        </div>
      </div>
      <div className="modalContent">
        {/* <HomeModal UTMSource={UTMSource} UTMMedium={UTMMedium} UTMCampaign={UTMCampaign}/> */}
      </div>
    </>
  );
}

Testimonial.getInitialProps = async ({ query }: { query: { feedback: string, lang: string, utm_source: string, utm_medium: string, utm_campaign: string } }) => {
  const { feedback, lang, utm_source, utm_medium, utm_campaign } = query;
  if (languages.includes(lang)) {
    return { feedback, lang, utm_source, utm_medium, utm_campaign };
  }
  return { feedback, utm_source, utm_medium, utm_campaign };
};
