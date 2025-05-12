import CustomButton from './customButton';
import style from './CallBack.module.scss';

export default function CallBack(props) {
  const { text1, modalId, isFormVisible, setIsFormVisible } = props;

  const openForm = () => {
    setIsFormVisible(true);
  };

  return (
    <section id="callback">
      <div
        className={`${style.callback} lg:!m-12 !p-12 text-center bg-[#19015F]`}
      >
        <h2 className="text-white !mb-6">{text1}</h2>
        <CustomButton modalId={modalId} buttonText="Request a call back" onClick={openForm} setIsFormVisible={setIsFormVisible} />
      </div>
    </section>
  );
}
