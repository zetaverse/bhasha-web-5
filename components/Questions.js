import { useState, useEffect } from 'react';
import style from './Questions.module.scss';

function Questions(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { id, question, answer } = props.faq;

  const handleResize = () => {
    setIsMobile(window.innerWidth < 720);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <>
      <p className="!pb-4 !items-center">
        {/* Button to open/close FAQ */}
        <button
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-controls={`faq-${id}`}
          className={`!flex !flex-row !justify-between !p-1 !pb-0 !px-4 !items-center w-full text-left transition-colors duration-300 ${
            isOpen ? '!text-[#4B2AAD]' : '!text-black'
          }`}
          style={{ textDecoration: 'none' }}
        >
          <span className={`${style.FAQQuestion} !w-3/4 !self-center`}>
            {question}
          </span>

          {/* Icon changes depending on state and device size */}
          {isMobile ? (
            isOpen ? (
              <OpenedIcon size={23} />
            ) : (
              <ClosedIcon size={23} />
            )
          ) : isOpen ? (
            <OpenedIcon size={55} />
          ) : (
            <ClosedIcon size={55} />
          )}
        </button>
      </p>

      {/* Answer with smooth transition */}
      <div
        id={`faq-${id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="!p-0 rounded-md bg-clip-border bg-white break-words min-w-0 flex flex-col relative !border-0 !px-4 !pt-4 !pb-12">
          <span className={style.FAQAns}>{answer}</span>
        </div>
      </div>
    </>
  );
}

// Icons moved to small components to make the code cleaner
function OpenedIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27.5" cy="27.5" r="27.5" fill="#4B2AAD" />
      <path d="M36.85 26.75V30.6H16.9V26.75H36.85Z" fill="white" />
    </svg>
  );
}

function ClosedIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27.5" cy="27.5" r="27.5" fill="#D9D9D9" />
      <path
        d="M28.0001 28.061V20.3467M28.0001 28.061V35.7753M28.0001 28.061H35.7143M28.0001 28.061H20.2858"
        stroke="black"
        strokeWidth="1.71429"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Questions;


// function Questions(props) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const { id, question, answer } = props.faq;

//   const handleResize = () => {
//     if (window.innerWidth < 720) {
//       setIsMobile(true);
//     } else {
//       setIsMobile(false);
//     }
//   };

//   useEffect(() => {
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleClick = () => {
//     setIsOpen((state) => !state);
//   };

//   return (
//     <>
//       <p className="!pb-4 !items-center">
//         <a
//           style={{textDecoration: 'none'}}
//           className={
//             isOpen
//               ? '!flex !flex-row !justify-between !p-1 !pb-0 !px-4 !items-center'
//               : '!flex !flex-row !justify-between !p-1 !pb-0 !px-4 !text-black !items-center'
//           }
//           type="button"
//           data-bs-toggle="collapse"
//           href={`#${id}`}
//           aria-expanded="false"
//           aria-controls="FAQs"
//           onClick={handleClick}
//         >
//           <span className={`${style.FAQQuestion} !w-3/4 !self-center`}>
//             {question}
//           </span>{' '}
//           {isMobile ? (
//             isOpen ? (
//               <svg
//                 width="23"
//                 height="23"
//                 viewBox="0 0 55 55"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle cx="27.5" cy="27.5" r="27.5" fill="#4B2AAD" />
//                 <path d="M36.85 26.75V30.6H16.9V26.75H36.85Z" fill="white" />
//               </svg>
//             ) : (
//               <svg
//                 width="23"
//                 height="23"
//                 viewBox="0 0 55 55"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <circle cx="27.5" cy="27.5" r="27.5" fill="#D9D9D9" />
//                 <path
//                   d="M28.0001 28.061V20.3467M28.0001 28.061V35.7753M28.0001 28.061H35.7143M28.0001 28.061H20.2858"
//                   stroke="black"
//                   strokeWidth="1.71429"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             )
//           ) : isOpen ? (
//             <svg
//               width="55"
//               height="55"
//               viewBox="0 0 55 55"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <circle cx="27.5" cy="27.5" r="27.5" fill="#4B2AAD" />
//               <path d="M36.85 26.75V30.6H16.9V26.75H36.85Z" fill="white" />
//             </svg>
//           ) : (
//             <svg
//               width="55"
//               height="55"
//               viewBox="0 0 55 55"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <circle cx="27.5" cy="27.5" r="27.5" fill="#D9D9D9" />
//               <path
//                 d="M28.0001 28.061V20.3467M28.0001 28.061V35.7753M28.0001 28.061H35.7143M28.0001 28.061H20.2858"
//                 stroke="black"
//                 strokeWidth="1.71429"
//                 strokeLinecap="round"
//               />
//             </svg>
//           )}
//         </a>
//       </p>

//         <div className="!p-0" id={id}>
//           {/* collapse show */}
//         <div className="!p-0 rounded-md bg-clip-border bg-white break-words min-w-0 flex flex-col relative !border-0 !px-4 !pb-12">
//           <span className={style.FAQAns}>{answer}</span>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Questions;
