import BiginForm from './BiginForm';
import { MdClose } from "react-icons/md";

export default function HomeModal(props) {
  const { isModalOpen, closeModal, UTMSource, UTMMedium, UTMCampaign } = props;

  return (
    <div
      className={`fixed left-0 top-0 w-full h-full z-1055 ${
        isModalOpen ? 'block' : 'hidden'
      }`}
      style={{backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(4px)"}}
      id="HomeModal"
      aria-labelledby="homeLabel"
      aria-hidden={!isModalOpen}
    >
      <div
        className="!pt-6 sm:w-[300px] lg:w-[536px] !mx-auto !bg-transparent !flex !min-h-[calc(100%-3.5rem)] !items-center !relative !m-0 sm:m-auto"
        style={{ maxWidth: '536px' }}
      >
        <div className="!relative !flex !flex-col !w-full bg-[#f3f5f7] border border-[rgba(0,0,0,0.175)] rounded-md outline-none">
          <div className="!mt-8 !flex !justify-between !items-center flex-shrink-0 border-0 ">
            {/* <button
              type="button"
              className="text-[#4b2AAD]"
              onClick={closeModal} // Close modal when button is clicked
              aria-label="Close"
            /> */}
            <button
            type="button"
            onClick={closeModal}
            aria-label="Close"
            className="absolute top-0 right-2 text-4xl !m-2 cursor-pointer text-gray-400 hover:text-[#212529] !font-light focus:outline-none"
          >
            {/* &times; Close icon */}
            <MdClose />
          </button>
          </div>
          <div className=" !px-4 relative grow-1 shrink-1 basis-auto sm:!px-12 py-0">
            <BiginForm UTMSource={UTMSource} UTMMedium={UTMMedium} UTMCampaign={UTMCampaign} />
          </div>
        </div>
      </div>
    </div>
  );
}
