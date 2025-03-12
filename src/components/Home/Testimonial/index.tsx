"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialData } from "@/app/api/data";

// CAROUSEL SETTINGS

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
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
        id="testimonial-section"
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4"
      >
        <div className="sm:flex justify-between items-center pb-6">
          <h2
            // className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4"
            className="text-2xl  sm:text-4xl font-bold mt-4 mb-4 overflow-hidden  bg-gradient-to-r from-[#ff9422]  to-[#d63715] bg-clip-text text-transparent"
            style={{ fontFamily: "Gilroy-Medium" }}
          >
            What Our Students Speaks
          </h2>
          <div>
            <button className="border-black font-medium hover:text-white py-3 px-4 border  bg-gradient-to-r from-[#ff9422] to-[#d63715] bg-clip-text text-transparent rounded duration-300">
              Give Your Review
            </button>
          </div>
        </div>
        <p
          // className="text-lg text-gray-950 font-medium pb-12"
          className="text-md  sm:text-xl font-bold pb-12 mt-4 mb-4 overflow-hidden  text-gray-700 "
          style={{ fontFamily: "Gilroy-Medium" }}
        >
          Build skills with our courses and mentor from world-class companies.
        </p>
        <Slider {...settings}>
          {TestimonialData.map((items, i) => (
            <div key={i}>
              <div className="bg-gradient-to-r from-[#fff4eb] via-[#ffdfd8] to-[#ffdfd8] m-4 pt-8 px-12 pb-10 text-center rounded-lg">
                <div className="relative z-0 flex justify-center items-center ">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={124}
                    height={124}
                    className="inline-block rounded-full ring-2 ring-orange bg-white relative"
                  />
                </div>
                <h3 className="text-sm pt-4 text-gray-950 pb-2">
                  {items.profession}
                </h3>
                <h4 className="text-2xl text-gray-950 font-semibold pb-3">
                  {items.name}
                </h4>
                <Image
                  src={items.starimg}
                  alt="stars-img"
                  width={124}
                  height={100}
                  className="m-auto pb-4"
                />
                <p className="text-lg text-gray-950 font-medium leading-9">
                  {items.detail}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
