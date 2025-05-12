import { useState, useEffect } from "react";

const FloatingButton = ({ modalTarget, language, isFormVisible, setIsFormVisible }) => {
  const [isMobile, setIsMobile] = useState(false);

  const openForm = () => {
    setIsFormVisible(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
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
      onClick={openForm}
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
    </>
    
  );
};

export default FloatingButton;
