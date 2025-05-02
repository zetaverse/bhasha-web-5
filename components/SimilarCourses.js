import Image from 'next/image';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import Styles from './SimilarCourses.module.scss';

function ButtonOne({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-arrow-left-circle-fill text-[#4B2AAD]"
      viewBox="0 0 16 16"
      onClick={() => onClick()}
    >
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
    </svg>
  );
}

function ButtonTwo({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor"
      className="bi bi-arrow-right-circle-fill text-[#4B2AAD]"
      viewBox="0 0 16 16"
      onClick={() => onClick()}
    >
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
    </svg>
  );
}

function ButtonGroup({ next, previous, goToSlide, ...rest }) {
  const {
    // eslint-disable-next-line no-unused-vars
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      className="absolute flex justify-between w-full"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      <ButtonOne onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
    </div>
  );
}

function SimilarCourses(props) {
  const { otherCourses, title } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 10000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 781 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 780, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      id="similar-Courses"
      className="w-full !m-auto !mt-12 !py-12 sm:!px-12 bg-[#ECF2FF] min-h-[590px]"
    >
      <h3 className={`text-center !m-1 ${Styles.similarCourses}`}>{title}</h3>
      <Carousel
        className="!m-1 sm:!m-12"
        responsive={responsive}
        autoPlay
        infinite
        autoPlaySpeed={3000}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        {otherCourses.map((eachCourse) => (
          <div
          //inner radius title spacer
            className="bg-white rounded-md bg-clip-border break-words min-w-0 flex-col flex relative !mx-12 !mb-2 !border-0"
            style={{
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            key={eachCourse.title}
          >
            <div className="w-full ">
              <Image
                src={eachCourse.imageURL}
                className="img-fluid w-full"
                // layout="responsive"
                width={900}
                height={300}
                alt={`Online ${eachCourse.title} Program`}
                priority
              />
            </div>
            <div className="bg-white grow shrink basis-auto text-center !p-0 !flex !flex-col"
            style={{
                  boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.1)"
            }}>
              <h3 className="text-xl/7.5 !mt-4 !mb-2"
                style={{ lineHeight: '22px' }}>{`Online ${eachCourse.title} Course`}</h3>
              <p className="text-base font-white !mb-4">Learn Anytime, Anywhere</p>
              <Link
                href={`/online-${eachCourse.title.toLowerCase()}-classes`}
                className="text-white bg-body-[#4B2AAD] bg-[#4B2AAD] !p-2 !rounded-full !border-0 !mx-auto !mb-6"
                style={{ width: '180px',
                  textDecoration: 'none',
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                 }}
              >
                View course
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default SimilarCourses;
