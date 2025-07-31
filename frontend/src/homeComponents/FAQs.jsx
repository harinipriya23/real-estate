import Marquee from "react-fast-marquee";

import { useState } from "react";

import { faqData } from "../layoutData/Q&Answers";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { partners_dark } from "../assets/Partners";
import { partners_light } from "../assets/Partners";
import { CallButton } from "../reusableComponents/CallButton";


export const FAQs = () => {
  const [isOpenId, setIsOpenId] = useState(null);

  const handleAnswers = (id) => {
    setIsOpenId(isOpenId === id ? null : id);
  };
  return (
    <main id="faqs" className="w-full rounded-xl p-4 space-y-4 bg-neutral-100 text-black dark:bg-black dark:text-white">
      <section className="h-full lg:h-[200px]">
        <p data-aos="fade-in-up" data-duration="500" className="text-center font-bold font-poppins text-xl md:text-2xl lg:text-3xl mb-4">
          Our Valued Partners
        </p>
        <Marquee speed={50}>
          {partners_dark.map((item, i) => (
            <img key={i} src={item} className="hidden dark:block w-24 h-16 sm:w-28 sm:h-[76px] md:w-32 md:h-20 lg:w-36 lg:h-24 xl:h-28 xl:w-40 object-contain hover:scale-105 hover:duration-700" />
          ))}
          {partners_light.map((item, i) => (
            <img key={i} src={item} className="block dark:hidden w-24 h-16 sm:w-28 sm:h-[76px] md:w-32 md:h-20 lg:w-36 lg:h-24 xl:h-28 xl:w-40 object-contain hover:scale-105 hover:duration-700" />
          ))}
        </Marquee>
      </section>
      <div className="flex flex-col lg:flex-row gap-4">
        <section className="h-full lg:flex-1 px-2 space-y-2 md:space-y-4">
          <div className="flex justify-between">
            <p data-aos="fade-in-up" data-aos-duration="500" className=" flex gap-2 items-center text-base sm:text-lg md:text-xl font-medium font-roboto">
              <span className="w-2 h-2 rounded-full bg-black dark:bg-white font-inter"></span>
              Explore Property FAQs
            </p>
            <CallButton />
          </div>
          <div className="relative capitalize self-center text-white font-poppins h-full w-full">
            <img className="object-cover rounded-md w-full h-[500px] lg:h-[775px] xl:h-[650px]"
              src="https://images.unsplash.com/photo-1592555059503-0a774cb8d477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D" />
            <div data-aos="fade-in-up" data-aos-duration="500" className="absolute inset-0 bg-black/50 gap-2 md:gap-4 flex flex-col items-center justify-center h-full rounded-md">
              <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
                Frequently Asked
              </p>
              <p className=" text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
                Questions
              </p>
              <p className="font-medium font-inter text-sm md:text-base lg:text-lg md:px-4 lg:px-6">
                Confidence build with clarity
              </p>
            </div>
          </div>
        </section>
        <section className="lg:flex-1 h-full font-inter rounded-lg bg-white text-black dark:bg-neutral-900 dark:text-white m-2 p-4">
          {faqData.map((topicItem, topicIndex) => (
            <div key={topicIndex}>
              <p data-aos="fade-in-up" data-aos-delay="700" className="text-base font-poppins md:text-lg font-semibold text-gray-700 dark:text-gray-200">
                {topicItem.topic}
              </p>
              {topicItem.faqs.map(({ id, question, answer }) => (
                <div key={id} data-aos="zoom-in-up" data-aos-duration="1000" onClick={() => handleAnswers(id)}
                  role="button" aria-expanded={isOpenId === id} tabIndex="0"
                  className="p-4 my-2 rounded-md grid grid-cols-12 bg-neutral-50 dark:bg-black">
                  <span className="size-7 hover:scale-110 duration-400 self-center col-span-1">
                    {isOpenId === id ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
                  </span>
                  <p className="text-base font-semibold col-span-11">{question}</p>
                  <div className={` transition-all duration-1000 ease-in-out overflow-hidden col-span-12 ${isOpenId === id
                    ? "max-h-30 opacity-100 mt-3" : "max-h-0 opacity-0"}`}>
                    <p data-aos="fade-in-up" className="text-sm text-justify px-4">
                      {answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};
