import Image from 'next/image';
import PopupForm from './PopupForm';
import Test2 from '../Images/test2.jpeg';

function TestimonialInsert2() {
  return (
    <section
      id="testimonial2"
      className="max-w-15/16 w-full !m-auto !my-12 bg-primary-subtle !p-4"
    >
      <div className="flex flex-wrap !-mx-3 md:!px-6">
        <div className="grow-0 shrink-0 basis-auto  w-full  lg:w-1/3 order-1 !flex !flex-col !justify-center">
          {/* <div className="image-container"> */}
          <Image
            // width={350}
            // height={350}
            style={{
              borderRadius: '1rem',
              // marginTop: '1rem',
              width: '100%',
              height: '100%',
            }}
            src={Test2}
            alt="testimonial"
          />
          {/* </div> */}
        </div>
        <div className="grow-0 shrink-0 basis-auto  w-full  lg:w-2/3 !order-2 !flex !flex-col">
          <h2 className="!text-center md:!text-start !m-1 !my-6 md:!my-2 md:!ms-12">
            Your website is free
          </h2>
          <p className="!text-center !md:text-start md:ms-12 md:!py-4">
            Podia makes website building so fun. I feel like I could set up a
            site in an afternoon, and it would look great. And there’s something
            to be said for how pretty it is. It’s the best-looking one by far.
          </p>
          <div className="!flex !flex-row !justify-evenly md:!flex-col md:!block md:!mx-12 md:!my-4">
            <button
              type="button"
              className="text-white bg-[#4B2AAD] p-2 px-md-5 rounded-full border-0"
              style={{ textDecoration: 'none',
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
               }}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Enquire Now
            </button>
            <PopupForm buttonName="Enquire Now" />
            <a
              href="https://bhasha.io/testimonials/"
              className="text-[#4B2AAD] !text-center bg-[#F3F5F7] !p-2 md:!px-6 md:!ms-4 !rounded-full"
              style={{ textDecoration: 'none',
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',

               }}
            >
              View testimonials
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialInsert2;
