import Masonry from 'react-responsive-masonry';
import Link from 'next/link';
import Review from './review';
import style from './LearnerReview.module.scss';

function LearnersReview(props) {
  const { reviews, language, testimonialTitle } = props;

  return (
    <section id="learners-reviews" className="!m-auto lg:!py-12 sm:!px-12">
      <h3 className={`text-center !px-4 lg:!py-2 !mb-2 ${style.reviewerName}`}>
        {testimonialTitle}
      </h3>

      <Masonry className="!hidden sm:!flex !py-2" columnsCount={3}>
        {reviews.map((review) => (
          <Review
            imageURL={review.imageURL}
            name={review.name}
            designation={review.designation}
            review={review.review}
            key={review.name}
            language={language}
          />
        ))}
      </Masonry>

      <div className="!flex !flex-col sm:!hidden !gap-4 md:!px-4">
  {reviews
    .filter((_, idx) => idx < 4)
    .map((review) => (
      <div className='!flex-grow !flex-shrink-0 !basis-0 !py-4 !px-1'>
      <div className=" !justify-center !px-4" key={review.name}>
        <Review
          imageURL={review.imageURL}
          name={review.name}
          designation={review.designation}
          review={review.review}
          language={language}
        />
      </div>
      </div>
    ))}
</div>


      {/* View all testimonials link */}
      <div className="!flex !justify-center">
        <Link
          href={`/testimonials?lang=${language}`}
          className="text-[#4B2AAD] bg-[#F3F5F7] !p-2 !px-6 !rounded-full"
          style={{
            textDecoration: 'none',
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
          }}
        >
          <span className={style.customButton}>View all testimonials</span>
        </Link>
      </div>
    </section>
  );
}

export default LearnersReview;
