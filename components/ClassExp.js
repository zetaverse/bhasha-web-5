import Script from 'next/script';
import style from './ClassExp.module.scss';

function ClassExp(props) {
  const { classExperience } = props;
  return (
    <>
      <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1.5.0/lite-youtube.js"
      />
      <section
        id="class-experience"
        className={`${style.classExperience}  !my-12 !py-12 lg:!p-12 `}
        style={{
          backgroundColor: '#F6F6F6',
          borderRadius: '10px',
        }}
      >
        <div className="!flex flex-wrap !-mx-3">
          <div className="!w-11/12 !grow-0 !shrink-0 !basis-auto !m-auto lg:!m-0 lg:!w-7/12 !order-1 !px-4">
            <div className="!aspect-video relative w-full">
              <lite-youtube
                videoid={classExperience.videoid}
                style={{ borderRadius: '10px',
                  height: '100%',
                 }}
              />
            </div>
          </div>
          <div className="!w-11/12 !grow-0 !shrink-0 !basis-auto lg:!w-5/12 order-2 !m-4 lg:!m-0 !ps-6">
            <h2 className="md:!m-1 md:!ms-4">{classExperience.title}</h2>
            <p className="!m-1 md:!ms-4 !pe-2 md:!pt-4 md:!pb-0">
              {classExperience.details}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClassExp;
