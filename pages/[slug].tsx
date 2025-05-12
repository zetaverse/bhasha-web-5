// import Head from 'next/head';
import { useContext, useEffect, useState } from "react";
import Script from "next/script";
import { UTMContext } from "../Context/UTMContext";
import dynamic from "next/dynamic";
import Error from "./error";
import MetaManager from "../components/MetaManager";
import Introduction from "../components/Introduction";
// import Curriculum from "../components/Curriculum";
// import TestimonialInsert1 from "../components/TestimonialInsert1";
// import ClassExp from "../components/ClassExp";
// import LearnersReview from "../components/LearnersReview";
// import CallBack from "../components/CallBack";
// import FAQ from "../components/FAQ";
// import CourseBenefits from "../components/CourseBenefit";
// import LearnerType from "../components/LearnerType";
import { languages } from "../utilities/utilities";
import Navbar from "../components/Navbar";
import FloatingButton from "../components/useFloatingButton";
// import SimilarCourses from "../components/SimilarCourses";


const PopupFormCRM = dynamic(() => import('../components/PopupFormCRM'), {
  ssr: false,
})

const Syllabus = dynamic(() => import('../components/syllabus'), {
  ssr: false,
})

const ClassExp = dynamic(() => import('../components/ClassExp'), {
  ssr: false,
})

const Curriculum = dynamic(() => import('../components/Curriculum'), {
  ssr: false,
})

const TestimonialInsert1 = dynamic(() => import('../components/TestimonialInsert1'), {
  ssr: false,
})

const CourseBenefits = dynamic(() => import('../components/CourseBenefit'), {
  ssr: false,
})

const LearnerType = dynamic(() => import('../components/LearnerType'), {
  ssr: false,
})

const LearnersReview = dynamic(() => import('../components/LearnersReview'), {
  ssr: false,
})

const CallBack = dynamic(() => import('../components/CallBack'), {
  ssr: false,
})

const FAQ = dynamic(() => import('../components/FAQ'), {
  ssr: false,
})
const SimilarCourses = dynamic(() => import('../components/SimilarCourses'), {
  ssr: false,
})


export default function Language({ introduction, selectedLanguage, utm_source, utm_medium, utm_campaign }: { introduction: any, selectedLanguage: string, utm_source: string, utm_medium: string, utm_campaign: string }) {
  if (!introduction) {
    return <Error />;
  }
  const {UTMSource, UTMMedium, UTMCampaign, setUTMSource, setUTMMedium, setUTMCampaign} = useContext(UTMContext);
  const [isFormVisible, setIsFormVisible] = useState(false);
  useEffect(()=>{
    if(utm_source || utm_medium || utm_campaign){
      setUTMSource(utm_source)
      setUTMMedium(utm_medium)
      setUTMCampaign(utm_campaign)
    }
  }, [])

  return (
    <>
      <MetaManager
        pageTitle={introduction.metaDetails.title}
        pageDescription={introduction.metaDetails.description}
        pageURL={`https://bhasha.io/online-${selectedLanguage}-classes`}
        pageKeywords={introduction.metaDetails.keywords}
      />
      {/* <Head>
        <title>{introduction.metaDetails.title}</title>
        <meta
          name="description"
          key= "description"
          content={introduction.metaDetails.description}
          ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/bhasha-logo-small.webp" />
        <meta name="robots" content="index, follow"></meta>
        <link
          rel="canonical"
          href={`https://bhasha.io/online-${selectedLanguage}-classes`}
        /> */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(introduction.schema1),
        }}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(introduction.schema2),
        }}
      />
      {/* </Head> */}
      <div className="allContent">
        <Navbar />
        <div className="overflow-hidden">
          <Introduction
            introduction={introduction.introduction}
            language={selectedLanguage}
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
          />
          <FloatingButton modalTarget="#staticBackdrop" language={selectedLanguage} isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible} />
          {introduction.classExperience.isFinal && (
            <ClassExp classExperience={introduction.classExperience} />
          )}
          {/* <ClassExp classExperience={introduction.classExperience} /> */}
          <Curriculum
            curriculumDetail={introduction.curriculumDetail}
            curriculumHeadline={introduction.curriculumHeadline}
            modalId="staticBackdrop"
            language={selectedLanguage}
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
          />
          {introduction.testimonial1.isFinal && (
            <TestimonialInsert1 testimonial1={introduction.testimonial1} />
          )}
          <CourseBenefits
            courseBenefits={introduction.courseBenefits}
            courseBenefitTitle={introduction.courseBenefitTitle}
            certificate={introduction.certificate}
            language={selectedLanguage}
          />
          <LearnerType
            key={selectedLanguage}
            language={selectedLanguage}
            learnerTitle={introduction.learnerTitle}
            learnerType={introduction.learnerType}
            modalId="staticBackdrop"
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
          />
          {introduction.isTestimonialFinal && selectedLanguage !== 'gujarati' && selectedLanguage !== 'punjabi' && (
            <LearnersReview
              reviews={introduction.reviews}
              testimonialTitle={introduction.testimonialTitle}
              language={selectedLanguage}
            />
          )}

          <FAQ faqs={introduction.faqs} />
          <CallBack
            text1={introduction.callbackTitle}
            modalId="staticBackdrop"
            language={selectedLanguage}
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
          />
          <SimilarCourses
            otherCourses={introduction.otherCourses}
            title="Similar courses"
          />
        </div>
      </div>
      <div className="modalContent">
        {isFormVisible && (
            <PopupFormCRM
              language={selectedLanguage}
              UTMSource={UTMSource}
              UTMMedium={UTMMedium}
              UTMCampaign={UTMCampaign}
              isModalOpen={isFormVisible}
              closeModal={() => setIsFormVisible(false)}
            />
          )}
        {/* {introduction.curriculumDetail.coursesDetails.map((eachDetail: any) => (
          <Syllabus
            key={eachDetail.courseSyllabus.id}
            courseSyllabus={eachDetail.courseSyllabus}
            id={`courseCurriculum${eachDetail.courseSyllabus.id}`}
          />
        ))} */}
      </div>
    </>
  );
}

Language.getInitialProps = async ({ query }: { query: any }) => {
  if (!query.slug || typeof query.slug !== 'string') {
    return { introduction: null, selectedLanguage: null, utm_source: null, utm_medium: null, utm_campaign: null };
  }
  const lang = query.slug.split("-");
  const { utm_source, utm_medium, utm_campaign } = query;

  if (!lang[1]) {
    return { introduction: null, selectedLanguage: null, utm_source, utm_medium, utm_campaign };
  }
  const selectedLanguage = lang[1].toLowerCase();
  let introduction;
  if (languages.includes(selectedLanguage)) {
    introduction = await import(`../utilities/${selectedLanguage}`);
  } else {
    introduction = null;
  }
  return { introduction, selectedLanguage, utm_source, utm_medium, utm_campaign };
};
