import Image from 'next/image';
import style from './CourseBenefit.module.scss';

export default function CourseBenefits(props) {
  const { courseBenefits, certificate, language, courseBenefitTitle } = props;
  return (
    <section id="course-benefits" className="!m-1 lg:!m-12 lg:!py-12 ">
      <div className="!flex !flex-wrap -!mx-3 !mb-12">
        <div className='!grow-0 !shrink-0 !basis-auto lg:!w-1/12'></div>
        <div className="!grow-0 !shrink-0 !basis-auto !px-3 !w-full lg:!w-5/12 !order-2 lg:!order-1 !flex !flex-col">
          <h2 className="!text-center !pt-12 lg:!pt-0">{courseBenefitTitle}</h2>
          <div className="!inline-flex !flex-col !mx-auto !justify-center">
            {courseBenefits.map((benefit) => (
              <div className="!flex !py-2 !items-center" key={benefit}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9725 6.21175L8.83334 13.3509L4.94417 9.47258L3.41667 11.0001L8.83334 16.4167L17.5 7.75008L15.9725 6.21175ZM11 0.166748C5.02001 0.166748 0.166672 5.02008 0.166672 11.0001C0.166672 16.9801 5.02001 21.8334 11 21.8334C16.98 21.8334 21.8333 16.9801 21.8333 11.0001C21.8333 5.02008 16.98 0.166748 11 0.166748ZM11 19.6667C6.21167 19.6667 2.33334 15.7884 2.33334 11.0001C2.33334 6.21175 6.21167 2.33341 11 2.33341C15.7883 2.33341 19.6667 6.21175 19.6667 11.0001C19.6667 15.7884 15.7883 19.6667 11 19.6667Z"
                    fill="#4B2AAD"
                  />
                </svg>{' '}
                <span className={`!ps-6 ${style.benefit}`}>{benefit} </span>
              </div>
            ))}
          </div>
        </div>
        <div className="!grow-0 !shrink-0 !basis-auto !w-full lg:!w-5/12 !flex !flex-col !text-center !items-center !order-1 lg:!order-2 !p-0 lg:!p-1">
          <div className="!w-full relative"
          style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
            <Image
              alt={`Scanned image of Bhasha.io's online ${language} course certificate`}
              aria-label={`Online ${language} Course - Certificate`}
              className="!w-full !h-auto object-contain"
              sizes="(max-width: 990px) 100vw, 50vw"
              src={certificate}
              width={500}  // define width
              height={300} // define height
              style={{
                objectFit: 'contain', // ensures the image fits within its container without cropping
                marginBottom: '1rem', // space between image and text
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
