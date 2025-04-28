import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Inter } from 'next/font/google';
import { FaBars, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] });

const HeadingItem = React.memo(({ heading, onClick }) => (
  <li className="!my-1" style={{ lineHeight: '1.7', paddingLeft: '0.5rem'  }}>
    <a 
      href={`#${heading.id}`} 
      onClick={(e) => {
        e.preventDefault();
        onClick(heading.id);
      }}
    >
      {heading.text}
    </a>
  </li>
));

const Toc = () => {
  const [headings, setHeadings] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(true);
  const tocRef = useRef(null);
  const scrollTimeoutRef = useRef(null);  
  const offset = 100;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    
    const handleScreenChange = (e) => {
      setIsMobile(e.matches);
      setDropdownOpen(!e.matches);
    };
    
    handleScreenChange(mediaQuery);
    mediaQuery.addListener(handleScreenChange);
    
    return () => mediaQuery.removeListener(handleScreenChange);
  }, []);

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2')).map((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) heading.id = id;
      return { id, text: heading.textContent, level: heading.tagName };
    });

    setHeadings(headingElements);
  }, []); 

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;
    const currentHeading = headings.reduce((acc, heading) => {
      const element = document.getElementById(heading.id);
      if (element && element.offsetTop <= scrollPosition) {
        return heading;
      }
      return acc;
    }, null);

    if (currentHeading) {
      const tocItem = document.querySelector(`a[href="#${currentHeading.id}"]`);
      if (tocItem && tocRef.current) {
        const itemRect = tocItem.getBoundingClientRect();
        const tocRect = tocRef.current.getBoundingClientRect();
        tocRef.current.scrollTo({
          top: tocRef.current.scrollTop + itemRect.top - tocRect.top,
          behavior: 'smooth',
        });
      }
    }
  }, [headings, offset]);

  useEffect(() => {
    const debouncedScroll = () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedScroll);
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [handleScroll]);

  const handleHeadingClick = useCallback((id) => {
    const headingElement = document.getElementById(id);
    if (headingElement) {
      const topPosition = headingElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
      });
    }
  }, [offset]);

  const toggleDropdown = () => {
    if (isMobile) setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div ref={tocRef} className={`!m-auto !text-start ${inter.className}`} 
      style={{
        fontSize: "18px",
        fontWeight: "400",
        maxWidth: "920px",
        padding: "2.5rem 1rem 0rem",
      }}>
      <div className="!flex !items-center !justify-between"
      onClick={toggleDropdown}
        style={{
          backgroundColor: '#F3F3F3',
          padding: '0.5rem 1rem',
          borderRadius: '8px 8px 0px 0px', 
          cursor: isMobile ? 'pointer' : 'default',
        }}>
        <div className="!flex !items-center">
          {isMobile && (
            <button
              className="!block md:!hidden"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'black', 
                fontSize: '1.5rem',
                cursor: 'pointer',
                marginRight: '10px',
              }}>
              <FaBars />
            </button>
          )}
          <span className="!font-semibold !text-[xl] lg:!text-3xl" style={{ color: 'black' }}>
            Table of Contents
          </span>
        </div>
        {isMobile && (
          <button
            className="!block md:!hidden"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'black', 
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        )}
      </div>

      {(isDropdownOpen || !isMobile) && (
        <div
          style={{
            paddingLeft: '2rem',
            backgroundColor: isDropdownOpen ? '#F3F3F3' : 'transparent',
            maxHeight: isMobile && isDropdownOpen ? '500px' : 'auto',
            overflow: 'hidden',
            transition: 'max-height 0.3s ease, background-color 0.3s ease',
            borderRadius: '0px 0px 8px 8px',
          }}
        >
          <ul
            className="!ps-0"
            style={{
              fontSize: isMobile ? '1rem' : '1.2rem',
              textDecoration: `underline ${isMobile ? '1px' : '2px'} #4B2AAD`,
              listStyleType: 'disc',
              marginTop: '1rem',
            }}
          >
            {headings.map((heading) => (
              <HeadingItem key={heading.id} heading={heading} onClick={handleHeadingClick} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Toc;