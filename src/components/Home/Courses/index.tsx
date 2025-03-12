"use client";
import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CourseData } from "@/app/api/data";
import Image from "next/image";

const NamesList = () => {
  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    arrows: true,
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="bg-white"
      style={{
        fontFamily: "Gilroy",
      }}
    >
      <div
        id="courses-section"
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4"
      >
        <div className="flex justify-between items-center pb-12">
          {/* Centered "Services" Heading */}
          <h2
            // className="text-3xl sm:text-5xl text-center flex-grow font-bold tracking-tight text-gray-900 my-4"

            className="text-2xl  sm:text-4xl font-bold mt-4 mb-4 overflow-hidden  bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            Services
          </h2>

          {/* "Explore Classes" Button Aligned to the Right */}
          <div>
            <button className="border-black font-medium hover:text-white py-3 px-4 border  bg-gradient-to-r from-[#ff9422] to-[#d63715] bg-clip-text text-transparent rounded duration-300">
              Explore Classes
            </button>
          </div>
        </div>

        {/* Slider for Courses */}
        <Slider {...settings}>
          {CourseData.map((course, index) => (
            <div key={index} className="px-2 ">
              <div className="shadow-lg  rounded-xl h-full mt-2 mb-2 flex flex-col">
                {/* Image Section */}
                <div className="overflow-hidden hover:bg-[#FDF7F7]  rounded-t-lg flex-shrink-0">
                  <Image
                    src={course.imageSrc}
                    alt={course.course}
                    width={300}
                    height={200}
                    className="w-full h-48 object-contain object-center"
                  />
                </div>

                {/* Content Section */}
                <div className="px-4 py-6 flex flex-col flex-grow">
                  <div className="flex justify-between">
                    <div className="block font-normal text-gray-900">
                      {course.course}
                    </div>
                    {/* <div className="block text-lg font-semibold text-success border-solid border-2 border-success "> */}
                    <div className="block border-orange rounded-md px-1">
                      <Image
                        src={course.iconSrc}
                        alt="Icon"
                        width={34} // Adjust size as needed
                        height={34} // Adjust size as needed
                        className="object-cover border-orange"
                      />
                    </div>
                    {/* </div> */}
                  </div>
                  <p
                    aria-hidden="true"
                    className="mt-2 text-gray-950 mb-5 text-2xl font-semibold"
                  >
                    {course.profession}
                  </p>
                  <div className="mt-auto">
                    <button className="w-full bg-gradient-to-r from-[#fbebe8] via-[#fbebe8] to-[#fbebe8] text-[#EA7D06] border-2 border-[#EA7D06] px-2 py-1 sm:px-3 sm:py-2 lg:px-5 lg:py-2 rounded-lg font-semibold text-sm sm:text-[1rem] group-hover:bg-gradient-to-r group-hover:from-[#ea7d06] group-hover:via-[#DF3C19] group-hover:to-[#DF3C19] group-hover:text-white text-center">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NamesList;
