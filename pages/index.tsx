// "use client"

import { useEffect, useContext, useState } from "react";
import Script from "next/script";
import { UTMContext } from "../Context/UTMContext";
import MetaManager from "../components/MetaManager";
import Navbar from "../components/Navbar";
import dynamic from "next/dynamic";
import HomeIntroduction from "../components/HomeIntroduction";

import {
  metaDetails,
  schema,
  introduction,
  curriculumDetail,
  classExperience,
  testimonial1,
  faqs,
  testimonialTitle,
  reviews,
  callbackTitle,
  otherCourses,
} from "../utilities/HomeContent";
import FooterNew from "../components/Footer-New";

const HomeModal = dynamic(() => import('../components/HomeModal'), {
  ssr: false,
})

const Syllabus = dynamic(() => import('../components/syllabus'), {
  ssr: false,
})

const SimilarCourses = dynamic(() => import('../components/SimilarCourses'), {
  ssr: false,
})

const ClassExp = dynamic(() => import('../components/ClassExp'), {
  ssr: false,
})

const TestimonialInsert1 = dynamic(() => import('../components/TestimonialInsert1'), {
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

export default function Home({utm_source, utm_medium, utm_campaign}: {utm_source: string, utm_medium: string, utm_campaign: string}) {
  const {UTMSource, UTMMedium, UTMCampaign, setUTMSource, setUTMMedium, setUTMCampaign} = useContext(UTMContext);
  const [isFormVisible, setIsFormVisible] = useState(false);
  useEffect(()=>{
    if(utm_source || utm_medium || utm_campaign){
      setUTMSource(()=>utm_source)
      setUTMMedium(()=>utm_medium)
      setUTMCampaign(()=>utm_campaign);
    }
    else{
    }
  })
  return (
    <>
      <MetaManager
        pageTitle={metaDetails.title}
        pageDescription={metaDetails.description}
        pageURL="https://bhasha.io/"
        pageKeywords={metaDetails.keywords}
      />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="allContent">
        <Navbar />
        <div className="overflow-hidden">
          <HomeIntroduction introduction={introduction} 
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible} />
          <SimilarCourses otherCourses={otherCourses} title="Our courses" />
          <ClassExp classExperience={classExperience} />
          <TestimonialInsert1 testimonial1={testimonial1} />
          <LearnersReview
            reviews={reviews}
            language="Indian Language"
            testimonialTitle={testimonialTitle}
          />
          <FAQ faqs={faqs} />
          <CallBack
            text1={callbackTitle}
            modalId="HomeModal"
            isFormVisible={isFormVisible}
            setIsFormVisible={setIsFormVisible}
          />
        </div>
        <FooterNew/>
      </div>
      <div className="modalContent">
        {isFormVisible && (
          <HomeModal
            UTMSource={UTMSource}
            UTMMedium={UTMMedium}
            UTMCampaign={UTMCampaign}
            isModalOpen={isFormVisible}
            closeModal={() => setIsFormVisible(false)}
          />
        )}
          {/* {curriculumDetail.coursesDetails.map((eachDetail) => (
            <Syllabus
              courseSyllabus={eachDetail.courseSyllabus}
              id={`courseCurriculum${eachDetail.courseSyllabus.id}`}
              key={eachDetail.courseSyllabus.id}
            />
          ))} */}
      </div>
      </>
  );
}

Home.getInitialProps = async ({ query }: { query: { utm_source: string, utm_medium: string, utm_campaign: string } }) => {
  const { utm_source, utm_medium, utm_campaign } = query;
  
  return { utm_source, utm_medium, utm_campaign };
};