import style from './customButton.module.css';

export default function CustomButton(props) {
  const { modalId, buttonText, onClick } = props;
  return (
    <>
    <button
      type="button"
      className="text-[#4B2AAD] bg-white !px-6 !p-2 !rounded-full !border-0 !cursor-pointer"
      style={{
        textDecoration: 'none',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
      }}
      onClick={onClick}
      data-bs-toggle="modal"
      data-bs-target={`#${modalId}`}
    >
      <span className={style.customButton}>{buttonText}</span>
    </button>
    </>
  );
}
