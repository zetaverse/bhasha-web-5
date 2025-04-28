import { useState } from 'react';
import blogFaqStyle from './BlogFaq.module.scss';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

function BlogQuestions({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  const { id, question, answer } = faq;

  const handleClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className={inter.className} style={{ border: isOpen ? '1px solid #4B2AAD' : '1px solid transparent', backgroundColor: isOpen ? 'lavender' : 'rgba(75,42,173,0.1)' }}>
      <p className="!pb-0 !items-center">
        <a
          className={
            isOpen
              ? '!flex !flex-row !justify-between !p-1 !pb-0 !px-4 !items-center'
              : '!flex !flex-row !justify-between !p-1 !pb-0 !px-4 !items-center text-black'
          }
          style={{
            textDecoration: 'none',
          }}
          type="button"
          data-bs-toggle="collapse"
          href={`#${id}`}
          aria-expanded="false"
          aria-controls="FAQs"
          onClick={handleClick}
        >
          <span className={`${blogFaqStyle.FAQQuestion} !w-3/4 !self-center`}>
            {question}
          </span>{' '}
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
          )}
        </a>
      </p>
      <div className="collapse !p-0" id={id}>
        <div className="!rounded-medium bg-white !break-words !min-w-0 !flex-col !flex !relative !m-4 !card-body !border-0 !px-4 !pb-12">
          <span className={blogFaqStyle.FAQAns}>{answer}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogQuestions;
