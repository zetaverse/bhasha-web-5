import CustomButton from './customButton';
import style from './CallBack.module.scss';
import { useState } from 'react';
import PopupFormCRM from './PopupFormCRM';

export default function CallBack(props) {
  const { text1, modalId, language } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="callback">
      <div
        className={`${style.callback} lg:!m-12 !p-12 text-center bg-[#19015F]`}
      >
        <h2 className="text-white !mb-6">{text1}</h2>
        <CustomButton modalId={modalId} buttonText="Request a call back" onClick={openModal} />
      </div>
      <PopupFormCRM isModalOpen={isModalOpen} closeModal={closeModal} language={language} />
    </section>
  );
}
