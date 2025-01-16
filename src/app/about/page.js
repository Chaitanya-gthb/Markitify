import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Frame from "../../../public/Frame.png";
import man from "@/app/manriding.png";
import Footer from "@/Components/Footer";

const AboutPage = () => {
  const bgStyle = {
    backgroundImage: `url(${Frame.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
    width: "100%",
  };

  return (
    <div className="">
      <Navbar />

      <div
        className="container mx-auto h-[584px] w-full lg:w-[1341px] mt-16 md:mt-44"
        style={bgStyle}
      >
        <div className="flex flex-col lg:flex-row lg:w-full pt-16 lg:justify-between lg:items-center items-center text-center lg:text-left">
          {/* Heading Section */}
          <h1 className="text-4xl sm:text-5xl font-semibold lg:w-[675px] lg:h-[219px] leading-loose lg:pl-10 mb-6 lg:mb-0">
            Beyond Ordinary, Built <br /> by an Extraordinary <br />
            Team!
          </h1>

          {/* Image Section */}
          <div className="w-[300px] sm:w-[343px] h-[300px] sm:h-[343px] lg:w-[663px] lg:h-[663px]">
            <Image
              src={man}
              alt="logo"
              width={612}
              height={586}
              className="lg:mt-24 relative lg:right-20"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-44 mb-36 md:mt-20">
        {/* first block */}
        <div className="flex flex-col lg:flex-row lg:gap-8 text-center mb-16 items-center lg:text-left">
          {/* Green Line */}
          <div className="h-1 w-56 md:w-72 lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-8 px-4 w-[400px] md:w-[550px] lg:leading-8 text-[#000000]">
            Markitify started with a clear purpose: to fix what wasn’t working.
            We noticed a gap in the industry—businesses paying too much for
            services that didn’t deliver. Agencies were overpromising,
            underdelivering, and leaving brands disappointed.
          </p>
        </div>

        <div className="flex flex-col lg:pl-96  lg:flex-row lg:gap-8 text-center mb-16 items-center lg:text-left">
          {/* Green Line */}
          <div className="h-1 w-56  md:w-72 lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-8 px-4 w-[400px]  md:w-[550px] lg:leading-8 text-[#000000]">
            Markitify started with a clear purpose: to fix what wasn’t working.
            We noticed a gap in the industry—businesses paying too much for
            services that didn’t deliver. Agencies were overpromising,
            underdelivering, and leaving brands disappointed.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-8 text-center mb-16 items-center lg:text-left">
          {/* Green Line */}
          <div className="h-1 w-56 md:w-72  lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-8 px-4 w-[400px]  md:w-[550px] lg:leading-8 text-[#000000]">
            Markitify started with a clear purpose: to fix what wasn’t working.
            We noticed a gap in the industry—businesses paying too much for
            services that didn’t deliver. Agencies were overpromising,
            underdelivering, and leaving brands disappointed.
          </p>
        </div>

        <div className="flex flex-col lg:pl-96   lg:flex-row lg:gap-8 text-center mb-16 items-center lg:text-left lg:leading-8 text-[#000000]">
          {/* Green Line */}
          <div className="h-1 w-56 md:w-72  lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-8 px-4 w-[400px]  md:w-[550px] lg:leading-8 text-[#000000]">
            Markitify started with a clear purpose: to fix what wasn’t working.
            We noticed a gap in the industry—businesses paying too much for
            services that didn’t deliver. Agencies were overpromising,
            underdelivering, and leaving brands disappointed.
          </p>
        </div>

        <div className="flex flex-col  lg:flex-row lg:gap-8 text-center mb-16 items-center lg:text-left">
          {/* Green Line */}
          <div className="h-1 w-56  md:w-72 lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-8 px-4 w-[400px]  md:w-[550px] lg:leading-8 text-[#000000]">
            Markitify started with a clear purpose: to fix what wasn’t working.
            We noticed a gap in the industry—businesses paying too much for
            services that didn’t deliver. Agencies were overpromising,
            underdelivering, and leaving brands disappointed.
          </p>
        </div>

        <div className="flex flex-col lg:pl-96  lg:flex-row lg:gap-8 text-center mb-16 items-center lg:text-left">
          {/* Green Line */}
          <div className="h-1 w-56 md:w-72  lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-8 px-4 w-[400px]  md:w-[550px] lg:leading-8 text-[#000000]">
            Markitify started with a clear purpose: to fix what wasn’t working.
            We noticed a gap in the industry—businesses paying too much for
            services that didn’t deliver. Agencies were overpromising,
            underdelivering, and leaving brands disappointed.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
