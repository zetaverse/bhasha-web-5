import Image from 'next/image';
import Stars from '../Images/stars.webp';
import style from './Testimonial1.module.scss';

function TestimonialInsert1({ testimonial1 }) {
  const { testimonial, name } = testimonial1;

  return (
    <section
      id="testimonial1"
      className="!flex !justify-center !my-12 lg:!px-12 lg:!mx-12"
    >
      <div
        className="text-center !my-6 lg:!my-0 lg:!mx-12 lg:!px-12"
        style={{ maxWidth: '1200px' }}
      >
        {/* Centered star image */}
        <Image
          width={188}
          height="auto"
          src={Stars}
          alt="Rating stars"
          className="!mx-auto"
        />

        {/* Testimonial text */}
        <p
          className={`${style.testimonialInsert} !pt-4 !p-2 !px-4 lg:!px-2 text-start lg:!text-center !mb-4`}
        >
          {testimonial}
        </p>

        {/* Name */}
        <p className={`${style.testimonialName} !pt-4 !p-2 !px-12 lg:!px-2 lg:!mb-4`}>
          {name}
        </p>
      </div>
    </section>
  );
}

export default TestimonialInsert1;
