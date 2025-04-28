import Link from 'next/link';
import style from './CTA.module.scss';

export default function CTA() {
  return (
    <div className="!flex !m-4 sm:!m-6 lg:!hidden">
      <Link
        className="text-white !rounded-full !m-auto"
        style={{ backgroundColor: '#49E56F', padding: '11px', textDecoration: 'none', boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)' }}
        aria-current="page"
        href="tel:+91-6366936559"
        aria-label="Call +91-6366936559"
      >
        <span className={style.CTASVG}>
          <svg
            width="24"
            height="22"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5606 16.5067C21.9041 16.5067 20.3016 16.24 18.8067 15.76C18.3354 15.6 17.8102 15.72 17.4466 16.08L15.3323 18.7067C11.5211 16.9067 7.9524 13.5067 6.05356 9.6L8.67961 7.38667C9.04322 7.01333 9.15096 6.49333 9.00282 6.02667C8.50454 4.54667 8.24867 2.96 8.24867 1.32C8.24867 0.6 7.64266 0 6.91544 0H2.25589C1.52867 0 0.65332 0.32 0.65332 1.32C0.65332 13.7067 11.0633 24 23.5606 24C24.5167 24 24.8938 23.16 24.8938 22.4267V17.8267C24.8938 17.1067 24.2878 16.5067 23.5606 16.5067Z"
              fill="white"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
}
