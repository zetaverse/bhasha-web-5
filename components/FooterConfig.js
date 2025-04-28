import Link from 'next/link';
import { useState, useEffect } from 'react';

const footerTexts = {
  content: [
    {
      heading: "",
      texts: [],
      listItems: []
    }
  ]
};

const footerLinks = {
  content: [
    {
      heading:"",
      links:[
        {
          text:"",
          url:""
        },
      ]
    },
  ]
};

const FooterLinksConfig = ({ index, handleClick, dropdownState }) => {
  if (!footerLinks.content[index] || !footerLinks.content[index].links.length) return null;

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
      const updateMedia = () => {
          setIsMobile(window.innerWidth < 768);
          setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
      };

      updateMedia();
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return isMobile||isTablet ? (
      <div className="!block lg:hidden bg-secondary">
        <div
          className="!flex !justify-between !pt-2 !pb-2 !px-6"
          onClick={() => handleClick(`drop${index  + 4}`)}
          onKeyDown={() => handleClick(`drop${index  + 4}`)}
          role="button"
          tabIndex={0}
        >
          <span style={{ fontWeight: '500', fontSize: '14px' }}>
            {footerLinks.content[index].heading}
          </span>
          {dropdownState && dropdownState[`drop${index  + 4}`] ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-chevron-down text-primary"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          )}
        </div>
        <div className="!px-12">
        {dropdownState && dropdownState[`drop${index  + 4}`] && (
          <>
            {footerLinks.content[index].links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                className="!block !py-1 "
                href={link.url}
                style={{ fontWeight: '400',fontSize: '12px',color: '#5C5856',textDecoration:"none"}}
              >
                <span>
                {link.text}
                </span>
              </Link>
            ))}
           </>
        )}
        </div>
      </div>
    ):(
      <div className="!flex !flex-col !justify-start !px-4">
      <h3 className="!ps-1 !pe-12 !me-6 !py-2">{footerLinks.content[index].heading}</h3>
      {footerLinks.content[index].links.map((link, linkIndex) => (
        <Link key={linkIndex} className="!block !px-1 !py-2 footerNewLink" href={link.url}>
          {link.text}
        </Link>
      ))}
    </div>
  )}

export default FooterLinksConfig;

const FooterTextsConfig = () => {
  
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
      const updateMedia = () => {
          setIsMobile(window.innerWidth < 768);
          setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024);
      };

      updateMedia();
      window.addEventListener('resize', updateMedia);
      return () => window.removeEventListener('resize', updateMedia);
  }, []);
  return (
    <div className="bg-secondary">
    <div className="!flex !flex-col !justify-start" style={{maxWidth:"1250px",margin:"0 auto"}}>
      {footerTexts.content.map((item, index) => (
        <div key={index} className="footer-item !px-6">
            <hr className="!my-4" style={{borderColor:"#00000020"}}/>
          <h4 className="!py-2 !mb-2" style={{fontSize: isMobile || isTablet ? "14px" : "18px"}}>{item.heading}</h4>
          {item.texts.map((text, textIndex) => (
            <p className="" key={textIndex} style={{ color: '#5C5856', lineHeight: "1", fontSize: isMobile || isTablet ? "12px" : "17px", textAlign: "justify" }}>{text}</p>
          ))}
          {item.listItems.length > 0 && (
            <ul className="!ps-4">
              {item.listItems.map((listItem, listIndex) => (
                <li key={listIndex} style={{ color: '#5C5856', fontSize: isMobile || isTablet ? "12px" : "17px",lineHeight:"1.5",textAlign:"justify"  }}>{listItem}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export { FooterTextsConfig,FooterLinksConfig };