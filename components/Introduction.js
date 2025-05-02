import Image from 'next/image';
import PopupFormCRM from './PopupFormCRM';
import { useState, useEffect } from 'react';
// import HomeModal from './HomeModal';

function Introduction(props) {
  const { heading, headingTxt, features, imageURL } = props.introduction;
  const { language } = props;
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); 

  }, []);
  const isMobile = windowWidth < 768;

  // Custom CSS for the hover effect
  useEffect(() => {
    // Add CSS for hover effect
    const style = document.createElement('style');
    style.innerHTML = `
      .cta-button {
        background-color: #F97316 !important;
        transition: background-color 0.3s ease;
        color: #FFFFFF !important; /* Ensure Enquire Now text is white */
      }
      .cta-button:hover {
        background-color: #EA580C !important;
      }
      .know-more-button {
        background-color: #F6F6F6 !important; /* Original off-white background */
        color: #EA580C !important; /* Dark orange text */
        /* Remove border and transition as they are no longer needed */
        /* border: 1px solid #EA580C !important; */
        /* transition: background-color 0.3s ease, color 0.3s ease; */
      }
      /* Remove the hover effect entirely */
      /* .know-more-button:hover {
         background-color: #FFEDD5 !important; 
         color: #EA580C !important; 
         border: 1px solid #EA580C !important; 
      } */
    `;
    document.head.appendChild(style);
    
    // Clean up
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div id="introduction" className="lg:max-w-[88%] !w-full lg:!mx-auto !px-3 !my-4 lg:!my-12 lg:!pt-2">
      <div className="!flex !flex-wrap !justify-center !m-auto  lg:!ms-12 !px-3">
        {/* <div className="col-lg-1" /> */}
        <div className="grow-0 shrink-0 basis-auto !w-full lg:!w-7/12 xl:!w-1/2 order-2 lg:!order-1 !flex !flex-col !p-3">
          {/* <h1 className="text-start fw-bold">
            Learn <span style={{ color: '#4B2AAD' }}>{heading}</span> Online  
            <span className="d-inline"> anytime, anywhere </span>
          </h1> */}
          <h1 className="!text-start !font-semibold" dangerouslySetInnerHTML={{ __html: heading }} style={{ 
            fontSize: isMobile ? "1.75rem" : "2.5rem",
            marginBottom: isMobile ? "0.5rem" : "0.75rem"
          }} />
          {headingTxt && <h2 
            className="!text-start !font-medium" 
            style={{ 
              fontSize: isMobile ? "1.1rem" : "1.25rem", 
              lineHeight: "1.6", 
              maxWidth: isMobile ? "100%" : "90%", 
              color: "#444", 
              letterSpacing: "0.01em",
              margin: isMobile ? "0.5rem 0 1rem" : "0.75rem 0 1.5rem" 
            }} 
            dangerouslySetInnerHTML={{ __html: headingTxt }} 
          />}
          {/* {headingTxt && <h2 className="text-start">{headingTxt}</h2>} */}
          <div className="lg:!my-4 !flex !flex-row !flex-wrap !p-0 !mx-auto !w-full">
            {features.map((feature) => (
              <div className="!flex !grow-0 !shrink-0 !basis-auto !w-auto sm:!w-1/2 !p-1 !pb-4" key={feature}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.355 6.84334L9.66668 14.5317L5.47834 10.355L3.83334 12L9.66668 17.8333L19 8.50001L17.355 6.84334ZM12 0.333344C5.56001 0.333344 0.333344 5.56001 0.333344 12C0.333344 18.44 5.56001 23.6667 12 23.6667C18.44 23.6667 23.6667 18.44 23.6667 12C23.6667 5.56001 18.44 0.333344 12 0.333344ZM12 21.3333C6.84334 21.3333 2.66668 17.1567 2.66668 12C2.66668 6.84334 6.84334 2.66668 12 2.66668C17.1567 2.66668 21.3333 6.84334 21.3333 12C21.3333 17.1567 17.1567 21.3333 12 21.3333Z"
                    fill="#4B2AAD"
                  />
                </svg>{' '}
                <span style={{
                    fontWeight: '400',
                    fontSize: '18px',
                    paddingLeft: '10px',
                  }}>{feature}</span>
              </div>
            ))}
          </div>
          <div className=" w-full sm:!my-2 sm:!mb-4 !block sm:!inline-flex sm:!flex-row !flex-col !flex-wrap !p-0">
            <div className="grow-0 shrink-0 basis-auto !w-full sm:!w-1/2 sm:!flex !hidden !justify-center sm:!justify-start !my-4">
              <button
                type="button"
                className="bg-[#F97316] bg-body-[#4B2AAD] text-white  !p-4 !px-6 !rounded-full !border-0 !w-full cursor-pointer"
                style={{
                  textDecoration: 'none',
                  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                }}
                onClick={openModal}
              >
                
                <span style={{ fontWeight: '500', fontSize: '20px' }}>Enquire Now</span>
              </button>
            </div>
            <div className="!grow-0 !shrink-0 !basis-auto !w-full sm:!w-1/2 !my-4 !hidden sm:!flex !justify-center sm:!justify-start">
              <a
                href="#course-curriculum"
                className="text-[#F97316] !text-center !p-4 !px-6 !rounded-full bg-[#F6F6F6] !w-full !ms-4"
                style={{textDecoration: 'none',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                <span style={{ fontWeight: '500', fontSize: '20px' }}>Know more</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto sm:!w-full lg:!w-5/12 !order-1 lg:!order-2 !flex !flex-col !items-center">
          <div className="!relative !w-full min-w-[400px]">
            <Image
              alt={`Photo of Bhasha's ${heading} Classes Student`}
              aria-label={`${heading} Classes Online`}
              className="image"
              height={800}
              width={800}
              layout="responsive"  // Ensure the image fills the container
              objectFit="contain"  // Optionally, use 'cover' to crop if needed
              sizes="(min-width: 990px) 50vw, 100vw"
              src={imageURL}
              quality={50}
              priority={true}
            />
          </div>
        </div>
      </div>
      <PopupFormCRM isModalOpen={isModalOpen} closeModal={closeModal} language={language} />
    </div>
    
  );
}

export default Introduction;
