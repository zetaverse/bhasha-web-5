import { useState } from 'react';
import Image from 'next/image';
import Stars from '../Images/stars.webp';
import style from './review.module.scss';

function Review(props) {
  const { name, designation, review, imageURL, language } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_LENGTH = 300; 
  const isLongReview = review.length > MAX_LENGTH;
  
  const displayReview = isExpanded ? review : review.slice(0, MAX_LENGTH) + '...';

  // Get initial for CSS avatar
  const initial = name ? name.charAt(0).toUpperCase() : '';

  return (
    <div className="md:!px-4 text-[#212529]">
      <div className="flex flex-row !h-auto justify-center items-start lg:justify-start">
        {imageURL ? (
          <Image
            width={70}
            height={70}
            className="object-contain"
            src={imageURL}
            alt={`Online ${language || ''} Classes - Review by ${name}`}
          />
        ) : (
          <div 
            className="!rounded-circle !flex !items-center !justify-center"
            style={{
              width: '70px',
              height: '70px',
              backgroundColor: '#4B2AAD',
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold'
            }}
          >
            {initial}
          </div>
        )}
        <div className="!flex !flex-col !justify-center !px-2">
          <span className={style.reviewer}>{name}</span>
          <span className={style.reviewerOcc}>{designation}</span>
        </div>
      </div>
      <Image
        className="!my-4 !mx-auto md:!mx-0 !block"
        width={188}
        height={24}
        src={Stars}
        alt="stars"
      />
      <p className={`!py-2 !mb-4 sm:!pb-12 ${style.review}`}>
        {displayReview}
        {isLongReview && (
          <span
            className={style.readbtn}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? ' Read less' : ' Read more'}
          </span>
        )}
      </p>
    </div>
  );
}

export default Review;
