import { useState } from 'react';
import LearnerDesc from './LearnerDesc';
import Style from './LearnerType.module.scss';
import PopupFormCRM from './PopupFormCRM';

function LearnerType(props) {
  const { learnerType, modalId, language, learnerTitle } = props;
  const [selectedLearner, setSelectedLearner] = useState(learnerType[0].name);
  const [description, setDescription] = useState(learnerType[0].description);
  const [imgURL, setImgURL] = useState(learnerType[0].imageURL);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClick = (e) => {
    const learner = e.target.value;
    const type = learnerType.find((learn) => learn.name === learner);
    setDescription(type.description);
    setSelectedLearner(type.name);
    setImgURL(type.imageURL);
  };
  return (
    <section id="learnerType" className="max-w-15/16 w-full !my-12 lg:!my-0 !mx-auto lg:!p-2">
      <h2 className={`text-center ${Style.learnerTypeHeading} !mb-2 text-[#1A1715]`}>
       {learnerTitle}
      </h2>
      <div className="!-mx-3!flex-wrap !p-1 lg:!px-12 lg:!py-6 !hidden lg:!flex !flex-row !items-stretch">
        <div
          className="grow-0 shrink-0 basis-auto w-full lg:w-1/3 order-2 none lg:block lg:order-1 !py-4"
          style={{
            backgroundColor: '#F6F6F6',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
          }}
        >
          {learnerType.map((learner) => (
            <button
              role="button"
              tabIndex="0"
              onClick={handleClick}
              value={learner.name}
              key={learner.name}
              className={
                selectedLearner === learner.name
                  ? Style.showLearner
                  : Style.learnerFont
              }
              style={{ cursor: 'pointer', margin: '0 1rem' }}
            >
              {learner.name}
            </button>
          ))}
        </div>

        <div
          className="grow-0 shrink-0 basis-auto w-full lg:w-2/3 none lg:flex order-1 lg:order-2"
          style={{
            backgroundColor: 'rgba(215, 210, 232, 0.29)',
            borderTopRightRadius: '8px',
            borderBottomRightRadius: '8px',
          }}
        >
          <LearnerDesc
            description={description}
            selectedLearner={selectedLearner}
            imageURL={imgURL}
            modalId={modalId}
            key={language}
          />
        </div>
      </div>
      <div className="!p-1 lg:!px-1 lg:py-6 lg:!hidden !flex !flex-col items-center">
        <div id="learner" className="lg:!hidden !py-4 !flex !flex-col !mx-auto">
          {learnerType.map((learner) => (
            <div className="!py-2 !flex !items-center" key={learner.name}>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6.5" cy="6.5" r="6.5" fill="#4B2AAD" />
              </svg>

              <span
                className={Style.mobileLearner}
                style={{
                  paddingLeft: '1rem',
                }}
              >
                {learner.name}
              </span>
            </div>
          ))}
          <div className="!mx-auto">
            <button
              type="button"
              className="text-white bg-[#4B2AAD] !mt-6 !p-2 !px-6 !rounded-full border-0"
              style={{textDecoration:"none",
                boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
              }}
              onClick={openModal}
            >
              <span style={{ fontWeight: '500', fontSize: '16px' }}>
                Enquire Now
              </span>
            </button>
          </div>
        </div>
      </div>
      <PopupFormCRM isModalOpen={isModalOpen} closeModal={closeModal} />
    </section>
  );
}

export default LearnerType;
