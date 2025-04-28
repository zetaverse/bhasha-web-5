import { useContext, useState, useEffect } from 'react';
import BlogModal from './BlogModal';
// import { UTMContext } from "../Context/UTMContext";

export default function BlogForm ({imgsrc, language, UTMSource, UTMMedium, UTMCampaign}){
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const {UTMSource, UTMMedium, UTMCampaign, setUTMSource, setUTMMedium, setUTMCampaign} = useContext(UTMContext);
  return (
    <div
      className={`!w-full !px-3 !flex ${isMobile ? '!flex-col' : '!flex-row'} !items-stretch`}
      style={{
        maxWidth: '920px',
        margin: '0 auto',
        textAlign: isMobile ? 'center' : 'start',
      }}
    >

      {!isMobile && (
        <div
          style={{
            flex: '3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={imgsrc}
            alt="Advertisement"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      )}

      <div
        style={{
          flex: '2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
          <BlogModal
            language={language}
            UTMSource={UTMSource} 
            UTMMedium={UTMMedium} 
            UTMCampaign={UTMCampaign}
          />

      </div>
    </div>
  );
};

// export default BlogForm;
