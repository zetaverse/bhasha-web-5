import { useState, useEffect } from "react";
import PopupFormCRM from './PopupFormCRM';

const FloatingButton = ({modalTarget}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
    <button
      type="button"
      className="text-white !p-4 !px-4 !rounded-full !shadow-sm !border-0 !w-1/2 md:!me-12"
      onClick={openModal}
      style={{
        position: 'fixed',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1050,
        textDecoration: 'none',
        backgroundColor: '#F97316'
      }}
    >
      <span style={{ fontWeight: '500', fontSize: '20px' }}>
        Enquire Now
      </span>
    </button>
      )}
      <PopupFormCRM isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
    
  );
};

export default FloatingButton;
