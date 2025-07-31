import Navbar from "../reusableComponents/Navbar";
import homeImg1 from "../assets/property/home2.jpg";
import homeImg2 from "../assets/property/home1.webp";
import buildingImg1 from "../assets/property/building1.avif";
import buildingImg2 from "../assets/property/building2.webp";

import { useState, useEffect } from "react";
import { CallButton } from "../reusableComponents/CallButton";
import { PiBuildingApartmentFill } from "react-icons/pi";


export const Hero = () => {

  const img = [homeImg1,homeImg2,  buildingImg1, buildingImg2,];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
      <section data-aos="fade-in-up" data-aos-duration="500"
        className="bg-white dark:bg-black h-full col-span-1 grid grid-rows-3 lg:p-4"    >
        <div className="flex justify-between row-span-1">
          <div className="flex justify-center gap-2 ">
            <PiBuildingApartmentFill className="h-6 md:h-8 w-6 md:w-8 motion-scale-in-50 motion-duration-1500" />
            <p className="font-poppins tracking-widest text-[16px] md:text-[20px] font-extrabold dark:text-white motion-preset-slide-up-sm motion-duration-1500 ">
              ESTATE
            </p>
          </div>
          <Navbar />
        </div>
        <div className=" row-span-1 text-center px-4 font-poppins">
          <p className="text-[12px] md:text-[14px] motion-preset-slide-up-md motion-duration-1500">
            Building Your Dreams
          </p>
          <h1 className="flex flex-col items-center text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold motion-preset-slide-up-md motion-duration-1500">
            India’s Elite Residences
            <span className="motion-preset-slide-up-md motion-duration-1500">
              A Legacy of Comfort and Wealth
            </span>
          </h1>
        </div>
        <div className="row-span-1 flex justify-between items-end font-inter ">
          <CallButton />
          <a href="#properties"
            className="flex items-center gap-2 md:gap-4 transition-all duration-300 ease-in-out hover:scale-95">
            <p className="flex flex-col text-[12px] md:text-[16px] font-medium dark:text-gray-200 text-gray-900 motion-preset-slide-up-sm motion-duration-1500">
              Explore All <span>Our Properties</span>
            </p>
            <img
              src={buildingImg2}
              className="rounded-full h-10 w-10 md:h-14 md:w-14 motion-scale-in-50 motion-duration-1500"
            />
          </a>
        </div>
      </section>
      <section data-aos="fade-in-up" data-aos-duration="500"
        className="relative bg-white dark:bg-black h-full col-span-1">
        <img src={img[currentIndex]}
          className="h-full w-full object-cover rounded-lg shadow-sm motion-scale-in-90 motion-duration-1500" />
        <div data-aos="fade-in-up" data-aos-duration="500"
          className="absolute top-0 left-0 right-0 rounded-lg bg-black/30 h-full font-medium text-white z-10 px-4 py-10
       flex items-start justify-evenly text-[10px] md:text-[14px] lg:text-[16px] motion-scale-in-90 motion-duration-1500">
          <p className="flex flex-col items-center whitespace-nowrap motion-preset-slide-up-md motion-duration-1500">
            7+ Years of Expertise<span>Thousands of happy moves</span>
          </p>
          <p className="flex flex-col items-center whitespace-nowrap motion-preset-slide-up-md motion-duration-1500">
            Trusted by over 500 Happy<span> Homeowners and Tenants</span>
          </p>
        </div>
      </section>
    </div>
  );
};

// react icons, tailwind css animate, tailwind css motion, animate on scroll
