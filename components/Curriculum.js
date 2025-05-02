import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';
import style from './Curriculum.module.scss';
import PopupFormCRM from './PopupFormCRM';
import Syllabus from './syllabus';

function Curriculum(props) {
  const { details, coursesDetails, showSyllabus } = props.curriculumDetail;
  const { modalId, curriculumHeadline, language } = props;
  const [openCourseId, setOpenCourseId] = useState(coursesDetails[0]?.courseID || null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSyllabus, setActiveSyllabus] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const openSyllabus = (syllabusId) => setActiveSyllabus(syllabusId);
  const closeSyllabus = () => setActiveSyllabus(null);

  const toggleAccordion = (id) => {
    setOpenCourseId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section
      id="course-curriculum"
      className="lg:!mx-12 lg:!px-12 lg:!mb-12 lg:!pb-12 lg:text-center"
    >
      <h2 className="text-center text-capitalize !px-2 !mb-2">{curriculumHeadline}</h2>
      <p className="!px-3 lg:!pb-12 !mb-4">
        {details.map((detail) => (
          <span key={detail} className="!inline lg:!block">
            {detail}
          </span>
        ))}
      </p>

      <div className="sm:!m-auto lg:!mx-3" id="curriculum">
        {coursesDetails.map((course) => (
          <div className="bg-white rounded-md !my-1" key={course.courseID}>
            <div
              className=" !bg-[#ECF2FF] flex justify-between items-center !py-4 !px-4 cursor-pointer text-start"
              onClick={() => toggleAccordion(course.courseID)}
            >
              <h2 className="text-[#4B2AAD] !me-4" id={`heading${course.courseID}`}>
                <button
                  className={`bg-tertiary ${style.curriculumButton} text-start w-full`}
                  style={{
                    color: 'rgba(75, 42, 173, 0.86)',
                    borderRadius: '10px',
                  }}
                  type="button"
                  aria-expanded={openCourseId === course.courseID}
                  aria-controls={`body-${course.courseID}`}
                >
                  {course.courseTitle}
                </button>
              </h2>

              <SlArrowDown
  className={`w-5 h-5 text-[#4B2AAD] scale-110 transition-transform duration-300 origin-center ${
    openCourseId === course.courseID ? 'rotate-180' : 'rotate-0'
  }`}
/>

            </div>

            {openCourseId === course.courseID && (
              <div
                id={`body-${course.courseID}`}
                className='!mx-3 lg:!mx-0'
                aria-labelledby={`heading${course.courseID}`}
              >
                <div
                  className={`text-start lg:!p-6 !pb-6 ${style.courseDescription}`}
                  style={{ backgroundColor: 'rgba(243, 245, 247, 0.4)' }}
                >
                  {course.courseDesc}
                  <ul className="!mb-4 !ps-8 list-disc">
                    {course.courseFeatures.map((feature) => (
                      <li className="!p-1" key={feature}>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="text-white bg-body-primary bg-[#4B2AAD] !p-2 !px-6 lg:!px-12 !rounded-full !border-0 cursor-pointer"
                    style={{
                      textDecoration: 'none',
                      boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                    }}
                    onClick={openModal}
                  >
                    <span className={`${style.courseButton} lg:!px-6`}>Enquire Now</span>
                  </button>

                  {showSyllabus && course.courseSyllabus?.id && (
                    <button
                      type="button"
                      className="text-[#4B2AAD] bg-white !p-2 !px-2 lg:!px-12 !ms-6 lg:!ms-6 !rounded-full !border-0 cursor-pointer"
                      style={{
                        textDecoration: 'none',
                        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
                      }}
                      onClick={() => openSyllabus(course.courseSyllabus.id)}
                    >
                      <span className={`${style.courseButton} lg:!px-4`}>
                        View curriculum
                      </span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <PopupFormCRM isModalOpen={isModalOpen} closeModal={closeModal} language={language} />
      
      {coursesDetails.map((course) => (
        course.courseSyllabus && (
          <div
            key={course.courseSyllabus.id}
            className={`transition-opacity duration-150 ease-linear fixed left-0 top-0 w-full h-full z-1055 ${
              activeSyllabus === course.courseSyllabus.id ? 'block' : 'hidden'
            }`}
            style={{      
              backdropFilter: 'blur(5px)',
              backgroundColor: 'rgba(0,0,0, 0.5)',
              overflowY: 'auto',
              display: activeSyllabus === course.courseSyllabus.id ? 'block' : 'none'
            }}
          >
            <div className="!pt-8 !pb-8 z-1055 w-full !rounded-lg bg-transparent transition-opacity duration-150 ease-linear">
              <div className="transition-transform duration-300 ease-out w-[95%] sm:w-[90%] md:w-[85%] lg:w-[800px] !mx-auto !bg-transparent !flex !justify-center !relative">
                <div className="!relative !flex !flex-col !w-full bg-white !py-2 border border-[rgba(0,0,0,0.175)] rounded-md outline-none">
                  <Syllabus courseSyllabus={course.courseSyllabus} id={course.courseSyllabus.id} />
                  <div className="!flex !justify-center !pt-4 !pb-2 bg-white">
                    <button
                      type="button"
                      className="text-white bg-[#4b2aad] !p-1 sm:!p-2 !px-6 sm:!px-12 !rounded-full !border-0 cursor-pointer text-sm sm:text-base"
                      style={{
                        textDecoration: 'none',
                        boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
                      }}
                      onClick={closeSyllabus}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      ))}
    </section>
  );
}

export default Curriculum;
