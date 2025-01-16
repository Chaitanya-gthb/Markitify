import Image from "next/image";
import React from "react";

import portfolio1 from "@/app/portfiolio1.png";
import portfolio2 from "@/app/portfolio2.jpg";
import portfolio3 from "@/app/portfolio3.jpg";
import portfolio4 from "@/app/portfolio4.jpg";

const Portfolio = () => {
  return (
    // <div className="lg:mt-44 mt-14 lg:mb-60">
    //   <div className="container mx-auto bg-white lg:shadow-2xl py-8 lg:rounded-2xl">
    //     <div className="lg:w-[227px] lg:h-[120px] lg:ml-16 text-center">
    //       <h1 className="font-semibold text-[36px]">Our Portfolio</h1>
    //       <p className="font-medium lg:text-[12px] mt-4 tracking-widest lg:text-left">
    //         See how we bring ideas to life and deliver impactful results for our
    //         clients.
    //       </p>

    //       <button className="px-4 py-1 text-white font-light bg-black rounded-lg mt-8 lg:mr-32">
    //         Explore
    //       </button>
    //     </div>

    //     <div className=" lg:flex-row flex lg:items-center lg:gap-6 lg:ml-52 lg:w-fit flex-col items-center mt-10 gap-6">
    //       <Image src={portfolio1} alt="image1" width={460} height={268} className="w-[200px] h-[80px] object-contain lg:w-[460px] lg:h-[268px]"/>
    //       <div className="flex flex-col gap-4 ">
    //         <Image src={portfolio2} alt="image2" width={327} height={159} className="w-[200px] h-[80px] object-contain lg:w-[327px] lg:h-[159px]"/>
    //         <Image src={portfolio3} alt="image3" width={327} height={92} className="w-[200px] h-[80px] object-contain lg:w-[327px] lg:h-[92px]" />
    //       </div>
    //       <Image src={portfolio4} alt="image4" width={208} height={266} className="w-[200px] h-[80px] object-contain lg:w-[208px] lg:h-[266px]"/>
    //     </div>
    //   </div>
    // </div>

  //   <div className="lg:mt-44 mt-14 lg:mb-60">
  //   <div className="container mx-auto bg-white lg:shadow-2xl py-8 lg:rounded-2xl">
  //     <div className="lg:w-[227px] lg:h-[120px] lg:ml-16 text-center lg:text-left px-4">
  //       <h1 className="font-semibold text-[28px] lg:text-[36px]">
  //         Our Portfolio
  //       </h1>
  //       <p className="font-medium text-[14px] lg:text-[12px] mt-4 tracking-widest">
  //         See how we bring ideas to life and deliver impactful results for our
  //         clients.
  //       </p>

  //       <button className="px-4 py-1 text-white font-light bg-black rounded-lg mt-8 lg:mr-32">
  //         Explore
  //       </button>
  //     </div>

  //     <div className="lg:flex-row flex lg:items-center lg:gap-6 lg:ml-52 lg:w-fit flex-col items-center mt-10 gap-6 px-4">
  //       <Image
  //         src={portfolio1}
  //         alt="image1"
  //         width={460}
  //         height={268}
  //         className="w-[250px] sm:w-[300px] h-auto lg:w-[460px] lg:h-[268px] object-contain"
  //       />
  //       <div className="flex flex-col gap-4 w-full sm:w-auto items-center">
  //         <Image
  //           src={portfolio2}
  //           alt="image2"
  //           width={327}
  //           height={159}
  //           className="w- sm:w-[300px] h-auto lg:w-[327px] lg:h-[159px] object-contain"
  //         />
  //         <Image
  //           src={portfolio3}
  //           alt="image3"
  //           width={327}
  //           height={92}
  //           className="w- sm:w-[300px] h-auto lg:w-[327px] lg:h-[92px] object-contain"
  //         />
  //       </div>
  //       <Image
  //         src={portfolio4}
  //         alt="image4"
  //         width={208}
  //         height={266}
  //         className="w- sm:w-[300px] h-auto lg:w-[208px] lg:h-[266px] object-contain"
  //       />
  //     </div>
  //   </div>
  //  </div>

  <div className="lg:mt-44 mt-14 lg:mb-60 mb-10">
  <div className="container mx-auto bg-white lg:shadow-2xl py-8 lg:rounded-2xl px-4 sm:px-6 md:px-8">
    {/* Heading Section */}
    <div className="lg:w-[227px] lg:h-[120px] lg:ml-16 text-center lg:text-left">
      <h1 className="font-semibold text-[28px] sm:text-[32px] lg:text-[36px]">
        Our Portfolio
      </h1>
      <p className="font-medium text-[14px] sm:text-[16px] lg:text-[12px] mt-4 tracking-wide sm:tracking-wider">
        See how we bring ideas to life and deliver impactful results for our
        clients.
      </p>

      <button className="px-6 py-2 text-white font-light bg-black rounded-lg mt-6 lg:mt-8">
            Explore
          </button>
        </div>

        {/* Portfolio Images */}
        <div className="lg:flex-row flex lg:items-center lg:gap-6 lg:ml-52 lg:w-fit flex-col items-center mt-10 gap-6">
          {/* Image 1 */}
          <Image
            src={portfolio1}
            alt="Portfolio Item 1"
            width={460}
            height={268}
            className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-auto object-contain"
          />

          {/* Image 2 and 3 in a column */}
          <div className="flex flex-col gap-4 w-full sm:w-auto items-center">
            <Image
              src={portfolio2}
              alt="Portfolio Item 2"
              width={327}
              height={159}
              className="w-[250px] sm:w-[300px] md:w-[340px] lg:w-[327px] h-auto object-contain"
            />
            <Image
              src={portfolio3}
              alt="Portfolio Item 3"
              width={327}
              height={92}
              className="w-[250px] sm:w-[300px] md:w-[340px] lg:w-[327px] h-auto object-contain"
            />
          </div>

          {/* Image 4 */}
          <Image
            src={portfolio4}
            alt="Portfolio Item 4"
            width={208}
            height={266}
            className="w-[250px] sm:w-[300px] md:w-[340px] lg:w-[208px] h-auto object-contain"
          />
        </div>
      </div>
    </div>

  );
};

export default Portfolio;
