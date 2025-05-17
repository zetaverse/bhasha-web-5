import Image from 'next/image';
import homeBanner from '../public/Images/banners/homeBanner.webp';

function HomeIntroduction(props) {
  const { heading, features, imageURL } = props.introduction;
  const { isFormVisible, setIsFormVisible } = props;

  const toggleFormVisibility = () => {
    console.log('Enquire Now button clicked. Current isFormVisible:', isFormVisible);
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div id="homeIntroduction" className="lg:max-w-[88%]  !my-4 lg:!pt-12 w-full lg:!px-2 lg:!mx-auto">
      <div className="!flex !flex-wrap !m-auto lg:!ms-4">
        <div className="!flex !flex-col !justify-start !px-2 !pe-0 !w-full lg:!w-8/12 xl:!w-1/2 lg:!order-1 !order-2 grow-0 shrink-0 basis-auto">
          <h1 className="!text-start !my-3 lg:!my-3">
            Learn an <span className="text-[#4B2AAD]">{heading}</span>
            <span className="block"> anytime, anywhere </span>
          </h1>

          <div className="lg:!my-4 !flex !flex-row !flex-wrap !p-0 !mx-auto !w-full">
            {features.map((feature) => (
              <div className="!flex !grow-0 !shrink-0 !basis-auto !w-auto sm:!w-1/2 !p-1 !pb-2" key={feature}>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.355 6.84334L9.66668 14.5317L5.47834 10.355L3.83334 12L9.66668 17.8333L19 8.50001L17.355 6.84334ZM12 0.333344C5.56001 0.333344 0.333344 5.56001 0.333344 12C0.333344 18.44 5.56001 23.6667 12 23.6667C18.44 23.6667 23.6667 18.44 23.6667 12C23.6667 5.56001 18.44 0.333344 12 0.333344ZM12 21.3333C6.84334 21.3333 2.66668 17.1567 2.66668 12C2.66668 6.84334 6.84334 2.66668 12 2.66668C17.1567 2.66668 21.3333 6.84334 21.3333 12C21.3333 17.1567 17.1567 21.3333 12 21.3333Z"
                    fill="#4B2AAD"
                  />
                </svg>{' '}
                <span style={{
                    fontWeight: '400',
                    fontSize: '18px',
                    paddingLeft: '10px',
                  }}>{feature}</span>
              </div>
            ))}
          </div>

          <div className=" w-full sm:!my-4 !block sm:!inline-flex sm:!flex-row !flex-col !flex-wrap !p-0 !me-4">
            <div className="grow-0 shrink-0 basis-auto !w-full sm:!w-5/12 !flex !justify-center sm:!justify-start !my-4">
              <button
                type="button"
                className="bg-[#4B2AAD] text-white !p-4 !px-6 !rounded-full !border-0 !w-full cursor-pointer"
                style={{
                  textDecoration: 'none',
                  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                }}
                onClick={toggleFormVisibility}
              >
                <span style={{ fontWeight: '500', fontSize: '20px' }}>Enquire Now</span>
              </button>
            </div>
            <div className="!grow-0 !shrink-0 !basis-auto !w-full sm:!w-1/2 !my-4 !hidden sm:!flex !justify-center sm:!justify-start">
              <a
                href="#similar-Courses"
                className="text-[#4B2AAD] !text-center !p-4 !px-12 !rounded-full bg-[#F6F6F6] !w-full !ms-12 "
                style={{textDecoration: 'none',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                }}
              >
                <span style={{ fontWeight: '500', fontSize: '20px' }}>Know more</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grow-0 shrink-0 basis-auto !w-full lg:!w-5/12 xl:!w-1/2 lg:!order-2 order-1 !py-4 !px-3 !rounded-full !ps-0">
          <div className="w-full relative h-auto">
            <Image
              alt="Learn an Indian Language Online"
              aria-label="Learn an Indian Language Online"
              className="image"
              sizes="(max-width: 990px) 100vw, 50vw"
              src={homeBanner}
              quality={50}
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntroduction;
