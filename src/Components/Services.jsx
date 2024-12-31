"use client";

import React, { useRef } from "react";

import play from "@/app/play.jpg";
import board from "@/app/clapperboard.jpg";
import code from "@/app/code.jpg";
import ad from "@/app/ad.jpg";
import branding from "@/app/branding.jpg";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Link from "next/link";

const Services = () => {
  const sliderRef = useRef(null); // Ref for the slider

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: false, // Ensure cards have equal width
    adaptiveHeight: false, // Use fixed height for cards
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          infinite: false,
        },
      },
    ],
  };
  

  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-[36px] sm:text-4xl md:text-5xl font-semibold mb-12 text-gray-800">
          Our Services
        </h2>

        {/* Cards Slider */}
        <Slider {...settings} ref={sliderRef} className="slider-container">
          {/* Card 1 */}
          <div className="lg:w-[340px] lg:h-[430px] w-full h-full mx-auto rounded-lg shadow-xl lg:px-8 lg:py-4 p-2 text-left bg-white">
            <div className="mb-4">
              {/* Icon */}
              <div className="bg-white shadow-xl w-12 h-12 flex justify-center items-center rounded-lg">
                <Image src={play} width={29} height={29} alt="play" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Post Production
            </h3>
            <p className="text-gray-800 text-sm mb-2">
              Building brands that go beyond the ordinary, <br /> powered by
              innovation and bold ideas.
            </p>
            <Link className="flex justify-center py-6" href={"postproduction"}>
              <button className="bg-black text-white px-8 py-2 rounded-lg text-sm font-bold mb-4 hover:bg-gray-800">
                Explore more
              </button>
            </Link>
            <ul className="text-black font-semibold text-base">
              <li>Video Editing</li>
              <li className="mt-2">Graphic Designing</li>
              <li className="mt-2">Color Correction and Grading</li>
              <li className="mt-2">Sound Editing and Design</li>
            </ul>
          </div>

          {/* Add more cards similarly */}
          {/* Card 2 */}
          <div className="lg:w-[340px] lg:h-[430px] w-full h-full mx-auto bg-white rounded-lg shadow-xl lg:px-8 lg:py-4 p-2 text-left">
            <div className="mb-4">
              <div className="bg-white shadow-xl w-12 h-12 flex justify-center items-center rounded-lg">
                <Image src={code} width={29} height={29} alt="code" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Design & Development
            </h3>
            <p className="text-gray-800 text-sm mb-2">
              Building brands that go beyond the ordinary, powered by innovation
              and bold ideas.
            </p>
            <Link className="flex justify-center py-6" href={"design"}>
              <button className="bg-black text-white px-8 py-2 rounded-lg text-sm font-bold mb-4 hover:bg-gray-800">
                Explore more
              </button>
            </Link>
            <ul className="text-black font-semibold text-base">
              <li>UI/UX Design</li>
              <li className="mt-2">Development</li>
              <li className="mt-2">SEO Optimisation</li>
              <li className="mt-2">Maintenance and Support</li>
            </ul>
          </div>

          <div className="lg:w-[340px] lg:h-[430px] w-full h-full mx-auto bg-white rounded-lg shadow-lg lg:px-8 lg:py-4 p-2 text-left">
            <div className="mb-4">
              <div className="bg-white shadow-xl w-12 h-12 flex justify-center items-center rounded-lg">
                <Image src={board} width={29} height={29} alt="code" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Social Media
            </h3>
            <p className="text-gray-800 text-sm mb-2">
              Building connections through engaging campaigns and audience
              interaction.
            </p>
            <Link className="flex justify-center py-6" href={"social"}>
              <button className="bg-black text-white px-8 py-2 rounded-lg text-sm font-bold mb-4 hover:bg-gray-800">
                Explore more
              </button>
            </Link>
            <ul className="text-black font-semibold text-base">
              <li className="mt-2">Youtube</li>
              <li className="mt-2">Instagram 360</li>
              <li className="mt-2">Linkedin</li>
            </ul>
          </div>

        </Slider>

        {/* Dots for navigation */}
        <div className="flex items-center justify-center mt-20">
          {/* Green Dot */}
          <div
            className="w-6 h-6 bg-green-500 rounded-full cursor-pointer border-4 border-black hover:bg-black hover:border-green-500 hover:border-4  transition-all duration-300"
            onClick={() => sliderRef.current.slickPrev()} // Slide next by 2
          ></div>

          {/* Line */}
          <div className="w-12 h-1 bg-black"></div>

          {/* Black Dot */}
          <div
            className="w-6 h-6  rounded-full cursor-pointer border-4 border-black bg-green-500 hover:bg-black hover:border-green-500 hover:border-4 transition-all duration-300"
            onClick={() => sliderRef.current.slickNext()} // Slide previous by 2
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Services;



