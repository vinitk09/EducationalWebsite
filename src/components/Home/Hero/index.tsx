// import Dropdownone from './Dropdownone';
// import Dropdowntwo from './Dropdowntwo';

// const Banner = () => {
//   return (
//     <section className='bg-banner-image pt-40'>
//       <div className="relative px-6 lg:px-8">
//         <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl md:4px">
//               Advance your engineering <br /> skills with our courses
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-black">
//               Build skills with our courses and mentor from world-class companies.
//             </p>
//             <div className="mt-10 flex items-center justify-center gap-x-6">
//               <div className="hidden sm:block -space-x-2 overflow-hidden">
//                 <img
//                   className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
//                   src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 />
//                 <img
//                   className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
//                   src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 />
//                 <img
//                   className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
//                   src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
//                   alt=""
//                 />
//                 <img
//                   className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 />
//                 <img
//                   className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
//                   src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                   alt=""
//                 />
//               </div>
//               <div className='bannerBorder sm:pl-8'>
//                 <div className='flex justify-center sm:justify-start'>
//                   <h3 className='text-2xl font-semibold mr-2'>4.6</h3>
//                   <img src={'/images/banner/Stars.svg'} alt="stars-icon" />
//                 </div>
//                 <div>
//                   <h3 className='text-sm'>Rated by 25k on google.</h3>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* DROPDOWN BUTTONS */}

//           {/* <div className="mx-auto max-w-4xl mt-24 pt-6 pb-8 px-6 lg:max-w-4xl lg:px-8 bg-white rounded-lg boxshadow">
//             <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-8 xl:gap-x-8">
//               <div className="col-span-3">
//                 <Dropdownone />
//               </div>
//               <div className="col-span-3">
//                 <Dropdowntwo />
//               </div>
//               <div className="col-span-3 sm:col-span-2 mt-2">
//                 <button className="bg-primary w-full hover:bg-transparent hover:text-primary duration-300 border border-primary text-white font-bold py-4 px-3 rounded">
//                   Start
//                 </button>
//               </div>
//             </div>
//           </div> */}

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Banner;
"use client";
import Image from "next/image";
import l from "../Hero/Logo.png";
import hi from "../Hero/Hero/Heroback.jpg";
import { useState } from "react"; // For dropdown functionality

// Import logos
import tesla from "../Hero/Hero/t.png";
import bmw from "../Hero/Hero/b.png";
import audi from "../Hero/Hero/a.png";
import lufthansa from "../Hero/Hero/l.png";

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  return (
    <div
      className="bg-white"
      style={{
        fontFamily: "Gilroy-Medium",
      }}
    >
      {/* Header Section */}
      <header className="bg-white bg-opacity-100 fixed top-0 left-0 right-0 z-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <Image className="w-auto h-64" src={l} alt="" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Home
              </a>
              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                About Us
              </a>
              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Services
              </a>
              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Reviews
              </a>
              <a
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                Contact Us
              </a>
            </div>

            {/* Join Now Button */}
            <a
              href="#"
              title=""
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
              role="button"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="flex flex-col space-y-2 mt-4">
                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  Home
                </a>
                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  About Us
                </a>
                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  Services
                </a>
                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  Reviews
                </a>
                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-10 sm:py-16 lg:py-24 mt-16"
        style={{
          backgroundImage: `url(${hi.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // Ensure the background image is not repeated
          minHeight: "600px",
          // Set a minimum height to ensure the image is fully visible
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-2">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mt-4 text-2xl sm:text-7xl font-bold text-white lg:mt-8">
                Empowering dreams of Studying in <br />
                <span className="bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] bg-clip-text text-transparent">
                  Germany
                </span>
              </h1>

              {/* Reduced gap between text and button */}
              <a
                href="#"
                title=""
                className="inline-flex items-center px-6 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-gradient-to-r from-[#E56D09] via-[#D83E13] to-[#D83E13] rounded-full lg:mt-8 hover:bg-gradient-to-r hover:from-[#D83E13] hover:via-[#E56D09] hover:to-[#D83E13] focus:bg-gradient-to-r focus:from-[#D83E13] focus:via-[#E56D09] focus:to-[#D83E13]"
                role="button"
              >
                Call for free Counselling
                <svg
                  className="w-6 h-6 ml-8 -mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>

              {/* Small Description */}
              <p className="mt-5 text-sm text-white">
                Our students finished university to work at{" "}
                <span className="text-[#E56D09]">global offices</span> of
              </p>

              {/* Logos with increased width and proper spacing */}
              <div className="flex gap-4 sm:gap-6 mt-4">
                <Image
                  src={tesla}
                  alt="Tesla"
                  className="h-9 sm:h-12 w-7 sm:w-14 object-contain"
                />
                <Image
                  src={bmw}
                  alt="BMW"
                  className="h-9 sm:h-10 w-10 sm:w-10 md:w-14 object-contain"
                />
                <Image
                  src={audi}
                  alt="Audi"
                  className="h-9 sm:h-10 w-12 sm:w-16 md:w-20 object-contain"
                />
                <Image
                  src={lufthansa}
                  alt="Lufthansa"
                  className="h-9 sm:h-10 w-16 sm:w-24 md:w-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
