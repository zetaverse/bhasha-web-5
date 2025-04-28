import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Breadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);
  
  const [isMobile, setIsMobile] = useState(false);

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

  const formatSegment = (segment) => {
    const formatted = segment
      .replace(/-/g, ' ')
      .replace(/learner/g, 'Learner')
      .replace(/resources/g, 'Resources')
      .replace(/guide/g, 'Guide')
      .replace(/stories/g, 'Stories');

    const spaced = formatted.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    return spaced
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <nav aria-label="Breadcrumb" className="!mb-2">
      <ol className={`!flex !flex-wrap !list-none !mb-4 ${inter.className}`} style={{ 
          fontWeight: 500, 
          textAlign: 'left', 
          color: '#4B2AAD', 
          whiteSpace: 'nowrap', 
          overflow: 'hidden', 
          textOverflow: 'ellipsis' 
        }}>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          return (
            <li key={href} style={{ display: 'inline', marginBottom: isMobile ? '0.125rem' : '0.25rem' }}>
              <Link 
                href={href} 
                className={`${isMobile ? '' : '!text-lg'}`} 
                style={{ 
                  color: '#4B2AAD', 
                  fontWeight: 500, 
                  textDecoration: 'none',
                  fontSize: isMobile ? '0.832rem' : '0.875rem'
                }}
              >
                {formatSegment(segment)}
              </Link>
              {index < pathSegments.length - 1 && (
                <span className="!mx-1" style={{ fontWeight: 400 }}> &gt; </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
