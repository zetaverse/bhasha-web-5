import Image from 'next/image';
import style from './LearnerDesc.module.scss';
import { useState } from 'react';
import PopupFormCRM from './PopupFormCRM';

function LearnerDesc(props) {
  const { description, selectedLearner, imageURL, modalId } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-wrap -!mx-3 !px-6 !h-full">
      <div
        className="grow-0 shrink-0 basis-auto !px-3 !w-full lg:!w-5/12 !order-2 lg:!order-1 !flex !flex-col !my-12"
        style={{ zIndex: '2' }}
      >
        <div
  className="!w-full relative"
  style={{
    boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    height: '100%',
  }}
>
  <Image
    alt={selectedLearner}
    aria-label={selectedLearner}
    fill
    sizes="100vw"
    className="image"
    style={{
      borderRadius: '8px',
      objectFit: 'cover',
      zIndex: '-1',
    }}
    src={imageURL}
  />
</div>

        {/* </div> */}
      </div>
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12 order-1 lg:order-2 !flex !flex-col !pt-12 justify-between">
        <p className={`!mx-4 !py-2 ${style.learnerDescription}`}>{description}</p>
        <div className="!flex !mx-1 !items-end !pb-12">
          <button
            type="button"
            className="text-white bg-body-primary bg-[#4B2AAD] !mx-4 !p-4 !px-12 rounded-full border-0 cursor-pointer"
            style={{textDecoration:"none",
              boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
            }}
            onClick={openModal}
          >
            <span style={{ fontWeight: '500', fontSize: '18px' }}>
              Enquire Now
            </span>
          </button>
        </div>
      </div>
      <PopupFormCRM isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default LearnerDesc;
