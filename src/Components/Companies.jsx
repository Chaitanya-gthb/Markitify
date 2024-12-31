import Image from "next/image";
import React from "react";


import dine from "@/app/Dine.png";
import mega from "@/app/Mega.png";
import salon from "@/app/salon.png";

const Companies = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mt-20">
        <h1 className="font-semibold lg:text-[36px] text-4xl">We worked with</h1>

        <div className="w-full inline-flex flex-nowrap mt-20 overflow-x-hidden  drop-shadow-xl">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-loop-scroll p-6">
            <li className="">
              <Image width={250} height={250} src={dine} alt="google" />
            </li>
            <li>
              <Image width={250} height={250} src={salon} alt="samsung" />
            </li>
            <li>
              <Image width={250} height={250} src={mega} alt="Facebook" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Companies;

