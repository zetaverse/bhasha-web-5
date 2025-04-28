import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { languages, resourceCenter } from "../utilities/utilities";
import style from "./Navbar.module.css";
import "flowbite";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (!mobile) {
        setIsMenuOpen(false);
        setIsCoursesOpen(false);
        setIsResourcesOpen(false);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleDropdownToggle = (type) => {
    if (type === "courses") {
      setIsCoursesOpen((prev) => !prev);
    } else if (type === "resources") {
      setIsResourcesOpen((prev) => !prev);
    }
  };

  return (
    <nav className={`sticky top-0 z-1020 bg-[#f3f5f7] !py-4 lg:!px-12 ${style.navHeight}`}>
      <div className="lg:!mx-12 !px-3 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link className="navbar-brand lg:!pe-6" href="/">
          <Image alt="Logo" src="/Images/BhashaLogoNav.webp" width={200} height={50} priority className="block" />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={handleMobileMenuToggle}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="#4b2AAD"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:gap-8 lg:items-center lg:text-lg lg:font-medium text-[#000000a6]">
          <li>
            <Link href="/" className="hover:text-[#4b2AAD]">Home</Link>
          </li>

          <li className="group relative">
            <span className="cursor-pointer hover:text-[#4b2AAD]">Courses</span>
            <ul className="absolute hidden group-hover:block bg-[#f3f5f7] shadow-lg rounded-md !pt-2 !py-2 min-w-[180px]">
              {languages.map((lang) => (
                <li key={lang}>
                  <Link
                    href={`/online-${lang}-classes`}
                    className="block !px-4 !py-2 hover:bg-[#ecf2ff] hover:text-[#4b2AAD]"
                    style={{ textTransform: "capitalize" }}
                  >
                    {lang}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/testimonials" className="hover:text-[#4b2AAD]">Testimonials</Link>
          </li>

          <li>
            <Link href="/contact-us" className="hover:text-[#4b2AAD]">Contact Us</Link>
          </li>

          <li className="group relative">
            <Link href="/resources" className="hover:text-[#4b2AAD]">Resources</Link>
            <ul className="absolute hidden group-hover:block bg-[#f3f5f7] shadow-lg rounded-md !pt-2 !py-2 min-w-[180px]">
              {resourceCenter.map((res) => {
                const url = res.split(" ").join("").toLowerCase();
                return (
                  <li key={res}>
                    <Link
                      href={`/resources/${url}`}
                      className="block !px-4 !py-2 hover:bg-[#ecf2ff] hover:text-[#4b2AAD] text-capitalize"
                    >
                      {res}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="w-full mt-4 lg:hidden" id="navbar-dropdown">
            <ul className="flex flex-col">
              <li>
                <Link href="/" className="block !p-2 hover:text-[#4b2AAD]">Home</Link>
              </li>

              <li className="relative">
                <div className="flex justify-between items-center !p-2 cursor-pointer hover:text-[#4b2AAD]" onClick={() => handleDropdownToggle("courses")}>
                  Courses
                  <svg className="w-2.5 h-2.5 ml-2" viewBox="0 0 10 6" fill="none">
                    <path d="m1 1 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                {isCoursesOpen && (
                  <ul className="bg-[#f3f5f7] rounded-md !py-2 text-sm text-gray-700">
                    {languages.map((language) => (
                      <li key={language}>
                        <Link
                          href={`/online-${language}-classes`}
                          className="block !px-4 !py-2 hover:text-[#4b2AAD] hover:bg-[#ecf2ff]"
                          style={{ textTransform: "capitalize" }}
                        >
                          {language}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link href="/testimonials" className="block !p-2 hover:text-[#4b2AAD]">Testimonials</Link>
              </li>

              <li>
                <Link href="/contact-us" className="block !p-2 hover:text-[#4b2AAD]">Contact Us</Link>
              </li>

              <li className="relative">
                <div className="flex justify-between items-center !p-2 cursor-pointer hover:text-[#4b2AAD]" onClick={() => handleDropdownToggle("resources")}>
                <Link href="/resources" className="block hover:text-[#4b2AAD]">Resources</Link>
                  <svg className="w-2.5 h-2.5 ml-2" viewBox="0 0 10 6" fill="none">
                    <path d="m1 1 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                {isResourcesOpen && (
                  <ul className="bg-[#f3f5f7] rounded-md text-sm text-gray-700">
                    {resourceCenter.map((resource) => {
                      const url = resource.split(" ").join("").toLowerCase();
                      return (
                        <li key={resource}>
                          <Link
                            href={`/resources/${url}`}
                            className="block !px-4 !py-2 hover:bg-[#ecf2ff] hover:text-[#4b2AAD] text-capitalize"
                          >
                            {resource}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            </ul>
            {isMobile && isMenuOpen && (
  <div className="w-full mt-4 lg:hidden" id="navbar-dropdown">
    <ul className="flex flex-col">
      {/* home, courses, testimonials, contact, resources... */}
    </ul>

    {/* Phone CTA for mobile */}
    <div className="!py-2 !pl-1 max-w-3/4">
      <Link
        href="tel:+91-6366936952"
        className="text-white bg-[#4b2AAD] text-center text-base w-full !py-2 !px-4 rounded-full flex items-center justify-center gap-2"
        style={{
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
          textDecoration: "none",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.5606 16.5067C21.9041 16.5067 20.3016 16.24 18.8067 15.76C18.3354 15.6 17.8102 15.72 17.4466 16.08L15.3323 18.7067C11.5211 16.9067 7.9524 13.5067 6.05356 9.6L8.67961 7.38667C9.04322 7.01333 9.15096 6.49333 9.00282 6.02667C8.50454 4.54667 8.24867 2.96 8.24867 1.32C8.24867 0.6 7.64266 0 6.91544 0H2.25589C1.52867 0 0.65332 0.32 0.65332 1.32C0.65332 13.7067 11.0633 24 23.5606 24C24.5167 24 24.8938 23.16 24.8938 22.4267V17.8267C24.8938 17.1067 24.2878 16.5067 23.5606 16.5067Z"
            fill="#FF9D28"
          />
        </svg>
        <span className="font-semibold">+91-6366936952</span>
      </Link>
    </div>
  </div>
)}

          </div>
        )}

        {/* Phone CTA */}
        <div className="hidden lg:!flex !ms-auto !items-center !justify-end">
          <Link
            href="tel:+91-6366936952"
            className="text-white bg-[#4b2AAD] text-lg !py-2 !px-6 rounded-full !flex !items-center"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              textDecoration: "none",
            }}
          >
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.5606 16.5067C21.9041 16.5067 20.3016 16.24 18.8067 15.76C18.3354 15.6 17.8102 15.72 17.4466 16.08L15.3323 18.7067C11.5211 16.9067 7.9524 13.5067 6.05356 9.6L8.67961 7.38667C9.04322 7.01333 9.15096 6.49333 9.00282 6.02667C8.50454 4.54667 8.24867 2.96 8.24867 1.32C8.24867 0.6 7.64266 0 6.91544 0H2.25589C1.52867 0 0.65332 0.32 0.65332 1.32C0.65332 13.7067 11.0633 24 23.5606 24C24.5167 24 24.8938 23.16 24.8938 22.4267V17.8267C24.8938 17.1067 24.2878 16.5067 23.5606 16.5067Z"
                fill="#FF9D28"
              />
            </svg>
            <span style={{ fontWeight: "600" }}>&nbsp;+91-6366936952</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
