import BiginForm from './BiginForm';

export default function PopupFormCRM(props) {
  const { language, UTMSource, UTMMedium, UTMCampaign, isModalOpen, closeModal } = props;
  return (
    <div
      className={`transition-opacity duration-150 ease-linear fixed left-0 top-0 w-full h-full z-1055 ${
        isModalOpen ? 'block' : 'hidden'
      }`}
      style={{      
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0,0,0, 0.5)'
      }}
      id="staticBackdrop"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden={!isModalOpen}
    >
      <div
        className="!mt-12 sm:w-[300px] lg:w-[536px] !mx-auto !bg-transparent !flex !min-h-[calc(100%-3.5rem)] !items-center !relative !m-0 sm:m-auto"
        style={{ maxWidth: '536px',
         }}
      >
        <div className="!relative !flex !flex-col !w-full bg-[#f3f5f7] !py-2 border border-[rgba(0,0,0,0.175)] rounded-md outline-none">
          <div className="!p-4 !flex !justify-between !items-center flex-shrink-0 border-0">
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 text-4xl text-gray-400 hover:text-[#212529] !font-light focus:outline-none cursor-pointer"
            >
              &times; {/* Close icon */}
            </button>
          </div>
          <div className="!px-4 relative grow-1 shrink-1 basis-auto sm:!px-12 py-0">
            <BiginForm 
              language={language} 
              UTMSource={UTMSource} 
              UTMMedium={UTMMedium} 
              UTMCampaign={UTMCampaign} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
