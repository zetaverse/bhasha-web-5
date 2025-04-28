import Image from 'next/image';

import logo from '../public/Images/bhasha-logo-small.webp';

export default function Syllabus(props) {
  const { courseSyllabus, id } = props;
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div className="!p-3 sm:!p-4 border-b border-[#dee2e6] rounded-t-[7px] !w-full">
        <div className="!flex !flex-col !items-center !justify-between !w-full !relative">
          <div className="!flex !flex-row !items-center !w-full">
            <div className="!flex-1"></div>
            <span className="!flex-1 !text-opacity-100 text-[#ff9e28] !py-1 sm:!py-2 lg:!py-0 text-xl sm:text-2xl md:text-3xl font-bold text-center">
              {courseSyllabus.level.toUpperCase()}
            </span>
            <div className="!flex-1 !flex !justify-end">
              <Image src={logo} width={60} height={60} alt="Logo" className="sm:w-[70px] sm:h-[70px]" />
            </div>
          </div>
          <h2 className="mb-0 leading-[1.5] text-center text-[#4b2aad] !py-2 sm:!py-4 lg:!py-0 text-2xl sm:text-3xl md:text-4xl font-bold" id="syllabus">
            {courseSyllabus.title}
          </h2>
        </div>
      </div>
      <div
        className="!my-1 !p-1 !block !text-center bg-[#fae084] text-base sm:text-lg font-medium"
      >
        <span>{courseSyllabus.subtext}</span>
      </div>
      <div className="!relative !grow-1 !shrink-1 basis-auto !text-base sm:!text-lg md:!text-xl !p-2 sm:!p-4 !mx-auto font-medium">
        <ol className="!pl-8 sm:!pl-10 !space-y-2 sm:!space-y-3 list-decimal text-left">
          {courseSyllabus.content.map((content, index) => (
            <li key={index} className="!mb-2 sm:!mb-3 !pb-1 marker:text-[#4b2aad] marker:font-bold">
              <span>{content}</span>
            </li>
          ))}
        </ol>
      </div>
      <div
        className="!my-1 !p-1 !block !text-center bg-[#fae084] text-sm sm:text-base font-medium"
      >
        <span>Copyright Varta Labs Pvt. Ltd. {year}</span>
      </div>
    </>
  );
}
