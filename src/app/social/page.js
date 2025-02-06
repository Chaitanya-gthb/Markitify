import Navbar from "@/Components/Navbar";
import Image from "next/image";
import React from "react";

import design from "@/app/webdesign.png";

import call from "@/app/discall.png";
import sign from "@/app/signature.png";
import paper from "@/app/paper.png";
import elements from "@/app/elements.png";
import Frame from "../../../public/Frame.png"
import Footer from "@/Components/Footer";

const SocialPage = () => {
  const bgStyle = {
      backgroundImage: `url(${Frame.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "700px",
      width: "100%",
    };

  return (
    <div>
      <Navbar />

      <div className="container mx-auto backdrop-opacity-10 h-[584px] w-full lg:w-[1341px] mt-24" style={bgStyle}>
        <div className="flex lg:flex-row lg:w-full lg:h-[584px]  pt-16 lg:justify-between lg:items-center flex-col w-full items-center lg:text-left text-center ">
          {/* Heading Section */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-4xl lg:text-6xl pl-8 text-left font-medium lg:w-[950px] lg:h-[219px] leading-normal lg:pl-6 md:mt-20">
              Revolutionizing Feeds, Redefining Connections,Social Media Done
              Right
            </h1>
            <p className="text-sm sm:text-[16px] text-left lg:h-[69px] lg:w-[450px] lg:mt-8  font-medium mt-4 mx-8">
              We craft engaging strategies and content to elevate your brand,
              foster connections, and drive impactful results across all
              platforms.
            </p>
          </div>

          {/* Image Section */}
          <div className="h-[300px] sm:h-[343px] w-[300px] sm:w-[343px] lg:w-[612px] lg:h-[586px]">
            <Image
              src={design}
              alt="logo"
              width={612}
              height={586}
              className="lg:pt-48 lg:absolute lg:right-24"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto  h-[584px] lg:w-[1341px] mt-48 flex lg:flex-row lg:justify-center lg:gap-10 flex-col gap-12">
        <div className="w-[343px] h-[452px] md:w-[400px] md:h-full bg-gradient-to-b from-[#000000] to-[#393939] text-white  shadow-2xl rounded-xl p-6 mx-auto">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-gray-100 p-3 rounded-full">
            <img
                src="https://th.bing.com/th/id/OIP.gp8r8kzo5Lb6TdMni6XwJwHaHw?rs=1&pid=ImgDetMain"
                alt="Instagram Icon"
                className="object-contain w-6 h-6"
              />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-bold mb-2">Instagram 360</h2>
          <p className="text-[12px] text-[#A1A1A1] mb-16  tracking-wide font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas."
          </p>

          {/* Button */}
          <div className="flex justify-center ">
            <button className="w-[296px] h-[36px]  bg-[#FFFFFF] text-[#000000] py-2 rounded-lg text-sm font-medium mb-6 ">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-[14px]  space-y-4 font-semibold">
            <li>Content Creation</li>
            <li>Reels and Video Production</li>
            <li>Content Strategy and Planning</li>
            <li>Account Management</li>
          </ul>
        </div>

        <div className="lg:w-[440px] lg:h-[580px] w-[343px] h-[540px] md:w-[400px] md:h-full scale-100 mx-auto   bg-gradient-to-b from-[#000000] to-[#393939] text-white  shadow-2xl rounded-xl p-6 font-sans">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-[#5A5A5A] p-3 rounded-full">
              
              <img
                src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/fd62f9be-08cd-472f-e917-54e0ff9d8600/public"
                alt="Youtube Icon"
                className="object-contain w-6 h-6"
              />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-bold text-white mb-2">Youtube</h2>
          <p className="text-[12px] text-[#A1A1A1] mb-10  tracking-wider font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas.
          </p>

          <div className="w-full flex justify-center">
            {/* Button */}
            <button className=" bg-[#FFFFFF] text-black py-2 px-24  rounded-lg text-sm font-semibold mb-8">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-[14px]  space-y-6 font-semibold text-[#E0E0E0]">
            <li>Channel Strategy & Optimization</li>
            <li>Content Creation</li>
            <li>Video SEO & Metadata Optimization</li>
            <li>Content Calendar & Scheduling Content </li>
            <li>YouTube Ads Management</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>

        <div className="w-[343px] h-[452px] md:w-[400px] md:h-full bg-gradient-to-b from-[#000000] to-[#393939] text-white  shadow-2xl rounded-xl p-6 mx-auto">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-gray-100 p-3 rounded-full">
              
                <img
                src="https://i.pinimg.com/originals/30/ea/3a/30ea3a4c97094c2ba04d581ef5107866.jpg"
                alt="Linkedin Icon"
                className="object-cover w-6 h-6"
              />
              
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-bold mb-2">Linkedin</h2>
          <p className="text-[12px] text-[#A1A1A1] mb-16  tracking-wide font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas."
          </p>

          {/* Button */}
          <div className="flex justify-center ">
            <button className="w-[296px] h-[36px]  bg-[#FFFFFF] text-[#000000] py-2 rounded-lg text-sm font-medium mb-6 ">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-[14px]  space-y-4 font-semibold">
            <li>Profile Optimization & Branding</li>
            <li>Content Strategy & Creation</li>
            <li>LinkedIn Ads Management</li>
            <li>Analytics & Reporting</li>
          </ul>
        </div>
      </div>

      <div className="lg:w-[924px] lg:h-[46px] w-full h-full md:w-[600px] md:h-full container mx-auto mt-32 text-center tracking-wide">
        <p className="lg:text-[13px] text-[15px] font-medium lg:mt-0 mt-[1030px] p-8">
          Boost your brand’s social media with Markitify's expert management
          services. Engage audiences, drive growth, and achieve measurable
          results. Get started today!"
        </p>
      </div>

      <div className="lg:mt-56 mt-40 container mx-auto text-center flex flex-col items-center h-auto lg:h-[500px]">
        <h1 className="text-3xl font-bold text-[#4A4A4A] mb-10">
          What you will get
        </h1>
        <div className="w-full lg:w-[700px] md:w-[500px] flex flex-col">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Graphic design
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              storytelling
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              CMS
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Quality assurance
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Video editing
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Color grading/Them selection
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              storytelling
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Audio editing
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              branding
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-2 mt-40 mb-10 container mx-auto text-center flex flex-col items-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#4A4A4A] mb-6">
          Take off in just 4 steps
        </h1>
        <div className="lg:flex lg:flex-row lg:gap-8 flex flex-col gap-6 lg:w-[1183px] w-400px md:w-[500px] lg:h-auto lg:rounded-2xl border-y-4 border-x-4 border-dashed p-6 sm:p-12 justify-center items-center">
          {/* Step 1 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-white text-black rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image src={call} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-lg lg:text-xl">
                Discover Call
              </h1>
            </div>
            <p className="font-medium text-[12px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-[#212121] text-[#D5D5D5] rounded-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image src={sign} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Proposal & Agreement
              </h1>
            </div>
            <p className="font-medium text-[12px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wide">
              Based on our discussion, we create a detailed proposal with a
              clear project scope, timelines, and deliverables. Once you
              approve, we finalize the agreement to move forward confidently.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-white text-black rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image
                src={elements}
                alt="discover call"
                width={32}
                height={32}
              />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Collaboration/Approval
              </h1>
            </div>
            <p className="font-medium text-[12px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>

          {/* Step 4 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-[#212121] text-[#D5D5D5] rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image src={paper} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Take Off
              </h1>
            </div>
            <p className="font-medium text-[12px] sm:text-[10px] w-full h-auto mt-3 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SocialPage;
