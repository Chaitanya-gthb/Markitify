// import React from "react";

// import insta from "@/app/insta.png";
// import linkdin from "@/app/link.png";
// import Image from "next/image";

// import right from "@/app/right.png";

// const ContactandFAQ = () => {
//   return (
//     <div className="container mt-20 mb-20 lg:pb-0 pb-20 w-[390px] h-auto  mx-auto px-4 sm:px-6 lg:px-10 lg:pt-16  bg-[#1F1F1F] lg:w-[1117px] lg:h-[1404px] rounded-3xl ">
//       <div className="flex w-full lg:flex-row lg:justify-between flex-col-reverse">
//         {/* left side contact us */}
//         <div className="lg:w-1/3">
//           <h2 className="text-[#EFE6DA] font-bold text-[15px] lg:text-[30px] text-center">
//             Contact
//           </h2>

//           <div className="lg:mt-20 flex mt-10 gap-10 ml-20">
//             <div className="w-[2px] rounded-full lg:h-80 bg-green-400 h-36"></div>

//             <div className="flex flex-col">
//               <div className="text-[#818181] font-bold lg:text-2xl text-[10px]  lg:mt-6">
//                 Email
//               </div>
//               <p className="mt-2 text-white font-light text-[8px] lg:text-[14px]">
//                 vinay@markitify.in
//               </p>
//               <p className="text-white font-light text-[8px] lg:text-[14px]">
//                 markitify.in@gmail.com
//               </p>

//               <div className="text-[#818181] font-bold lg:text-2xl lg:mt-20 mt-8 text-[10px]">
//                 Social
//               </div>

//               <div className="mt-2 flex lg:gap-6 h-[17px] w-[17px] gap-2 lg:h-[33px] lg:w-[33px]">
//                 <Image
//                   src={insta}
//                   alt="insta"
//                   width={33}
//                   height={33}
//                   className="bg-transparent rounded-xl text-white"
//                 />
//                 <Image
//                   src={linkdin}
//                   alt="link"
//                   width={33}
//                   height={33}
//                   className="bg-transparent rounded-xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* right side FAQs */}
//         <div className="w-full text-left">
//           <h2 className=" lg:pl-56 font-bold lg:text-[30px] text-[15px] text-[#EFE6DA] lg:text-left  text-center">
//             FAQ
//           </h2>

//           <ul className="lg:max-w-2xl mx-auto lg:mt-20 mt-8  rounded-xl lg:pl-28 ">
//             <li className="">
//               <details className="group">
//                 <summary className="flex flex-row-reverse lg:flex-row  items-center lg:justify-between justify-end gap-3 lg:px-4 lg:py-1 font-bold marker:content-none hover:cursor-pointer">
//                   <span className="lg:text-[16px] font-semibold text-[10px]  text-[#FFFFFF] ">
//                     Do you work with small business?
//                   </span>
                  
//                 </summary>
//                 <article className="px-4 pb-4">
//                   <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                     et ipsum sapien. Vestibulum molestie porttitor augue vitae
//                     vulputate. Aliquam nec ex maximus, suscipit diam vel,
//                     tristique tellus.
//                   </p>
//                 </article>
//               </details>
//             </li>
//             <li className="mt-4 ">
//               <details className="group">
//                 <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
//                   <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
//                     Do you work with small business?
//                   </span>
                 
//                 </summary>
//                 <article className="px-4 pb-4">
//                   <p className="lg:text-[14px] text-[#818181] font-semibold text-[7px]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                     et ipsum sapien. Vestibulum molestie porttitor augue vitae
//                     vulputate. Aliquam nec ex maximus, suscipit diam vel,
//                     tristique tellus.
//                   </p>
//                 </article>
//               </details>
//             </li>

//             <li className="mt-4 ">
//               <details className="group">
//                 <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between  gap-3  lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
//                   <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
//                     What’s the onboarding process?
//                   </span>
                 
//                 </summary>
//                 <article className="px-4 pb-4">
//                   <p className="lg:text-[14px] text-[#818181] font-semibold text-[7px]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                     et ipsum sapien. Vestibulum molestie porttitor augue vitae
//                     vulputate. Aliquam nec ex maximus, suscipit diam vel,
//                     tristique tellus.
//                   </p>
//                 </article>
//               </details>
//             </li>

//             <li className="mt-4 ">
//               <details className="group">
//                 <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between  gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
//                   <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
//                     Is there a possibility of offline meeting?
//                   </span>
                 
//                 </summary>
//                 <article className="px-4 pb-4">
//                   <p className="lg:text-[14px] text-[#818181] font-semibold text-[7px]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                     et ipsum sapien. Vestibulum molestie porttitor augue vitae
//                     vulputate. Aliquam nec ex maximus, suscipit diam vel,
//                     tristique tellus.
//                   </p>
//                 </article>
//               </details>
//             </li>

//             <li className="mt-4">
//               <details className="group">
//                 <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between  gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
//                   <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
//                     Is there a possibility of offline meeting?
//                   </span>
                 
//                 </summary>
//                 <article className="px-4 pb-4">
//                   <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                     et ipsum sapien. Vestibulum molestie porttitor augue vitae
//                     vulputate. Aliquam nec ex maximus, suscipit diam vel,
//                     tristique tellus.
//                   </p>
//                 </article>
//               </details>
//             </li>

//             <li className="mt-4">
//               <details className="group">
//                 <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end  lg:justify-between gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
//                   <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
//                     Is there a possibility of offline meeting?
//                   </span>
                  
//                 </summary>
//                 <article className="px-4 pb-4">
//                   <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                     et ipsum sapien. Vestibulum molestie porttitor augue vitae
//                     vulputate. Aliquam nec ex maximus, suscipit diam vel,
//                     tristique tellus.
//                   </p>
//                 </article>
//               </details>
//             </li>

//             <li className="mt-4">
//               <details className="group">
//                 <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
//                   <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
//                     Is there a possibility of offline meeting?
//                   </span>
                
//                 </summary>
//                 <article className="px-4 pb-4">
//                   <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                     et ipsum sapien. Vestibulum molestie porttitor augue vitae
//                     vulputate. Aliquam nec ex maximus, suscipit diam vel,
//                     tristique tellus.
//                   </p>
//                 </article>
//               </details>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="w-full flex justify-center items-center  lg:py-6 lg:px-6 lg:mt-20 flex-col gap-5 mt-10 relative">
//         <h1 className="text-[#EFE6DA] font-bold text-[15px] lg:text-[30px] text-center">
//           {" "}
//           Let’s connect
//         </h1>
//         <iframe
//           src="https://cal.com/markitify.in/30min?user=markitify.in&duration=30&month=2024-12&layout=month_view&date=2024-12-26"
//           title="Cal.com Calendar"
//           allowFullScreen
//           className="lg:w-[905px] lg:h-[450px] h-[350px] w-[350px] lg:rounded-3xl lg:shadow-white lg:shadow-2xl shadow-xl rounded-md text-[12px]"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default ContactandFAQ;


import React from "react";

import insta from "@/app/insta.png";
import linkdin from "@/app/link.png";
import Image from "next/image";

const ContactandFAQ = () => {
  const faqs = [
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes, we collaborate with small businesses to provide tailored solutions that fit their unique needs and help them grow.",
    },
    {
      question: "Do you work with small businesses?",
      answer:
        "Yes, we collaborate with small businesses to provide tailored solutions that fit their unique needs and help them grow.",
    },
    {
      question: "What’s the onboarding process?",
      answer:
        "Our onboarding process starts with a consultation to understand your requirements, followed by a step-by-step integration plan.",
    },
    {
      question: "Is there a possibility of offline meetings?",
      answer:
        "Yes, we can arrange offline meetings depending on your location and schedule. Feel free to contact us for details.",
    },
    {
      question: "Is there a possibility of offline meetings?",
      answer:
        "Yes, we can arrange offline meetings depending on your location and schedule. Feel free to contact us for details.",
    },
    {
      question: "Is there a possibility of offline meetings?",
      answer:
        "Yes, we can arrange offline meetings depending on your location and schedule. Feel free to contact us for details.",
    },{
      question: "Is there a possibility of offline meetings?",
      answer:
        "Yes, we can arrange offline meetings depending on your location and schedule. Feel free to contact us for details.",
    }
  ];

  return (
    <div className="container mt-20 mb-20 lg:pb-10 pb-20 w-[390px] h-auto mx-auto px-4 sm:px-6 lg:px-10 lg:pt-16 bg-[#1F1F1F] lg:w-[1117px] lg:h-auto rounded-3xl">
      <div className="flex w-full lg:flex-row lg:justify-between flex-col-reverse">
        {/* Left Side: Contact Us */}
        <div className="lg:w-1/3 lg:mt-0 mt-10">
          <h2 className="text-[#EFE6DA] font-bold text-[15px] lg:text-[30px] text-center">
            Contact
          </h2>

          <div className="lg:mt-20 flex mt-10 gap-10 ml-20">
            <div className="w-[2px] rounded-full lg:h-80 bg-green-400 h-36"></div>

            <div className="flex flex-col">
              <div className="text-[#818181] font-bold lg:text-2xl text-[10px] lg:mt-6">
                Email
              </div>
              <p className="mt-2 text-white font-light text-[8px] lg:text-[14px]">
                vinay@markitify.in
              </p>
              <p className="text-white font-light text-[8px] lg:text-[14px]">
                markitify.in@gmail.com
              </p>

              <div className="text-[#818181] font-bold lg:text-2xl lg:mt-20 mt-8 text-[10px]">
                Social
              </div>

              <div className="mt-2 flex lg:gap-6 gap-2 lg:h-[33px] lg:w-[33px] h-[17px] w-[17px]">
                <Image
                  src={insta}
                  alt="Instagram"
                  width={33}
                  height={33}
                  className="bg-transparent rounded-xl"
                />
                <Image
                  src={linkdin}
                  alt="LinkedIn"
                  width={33}
                  height={33}
                  className="bg-transparent rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: FAQs */}
        <div className="w-full text-left lg:mt-0 mt-10">
          <h2 className="lg:pl-56 font-bold lg:text-[30px] text-[15px] text-[#EFE6DA] lg:text-left text-center">
            FAQ
          </h2>

          <ul className="lg:max-w-2xl mx-auto lg:mt-16 mt-8 rounded-xl lg:pl-28">
            {faqs.map((faq, index) => (
              <li key={index} className="mt-4">
                <details className="group">
                  <summary className="flex flex-row-reverse lg:flex-row items-center lg:justify-between justify-end gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
                    <span className="lg:text-[16px] font-semibold text-[10px] text-white">
                      {faq.question}
                    </span>
                  </summary>
                  <article className="px-4 pb-4">
                    <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
                      {faq.answer}
                    </p>
                  </article>
                </details>
              </li>
            ))}
          </ul>
        </div>
        

      </div>

      {/* Let's Connect Section */}
      <div className="w-full flex justify-center items-center lg:py-6 lg:px-6 lg:mt-20 flex-col gap-5 mt-10 relative">
        <h1 className="text-[#EFE6DA] font-bold text-[15px] lg:text-[30px] text-center">
          Let’s connect
        </h1>
        <iframe
          src="https://cal.com/markitify.in/30min?user=markitify.in&duration=30&month=2024-12&layout=month_view&date=2024-12-26"
          title="Cal.com Calendar"
          allowFullScreen
          className="lg:w-[905px] lg:h-[450px] h-[350px] w-[350px] lg:rounded-3xl lg:shadow-white lg:shadow-2xl shadow-xl rounded-md text-[12px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactandFAQ;

