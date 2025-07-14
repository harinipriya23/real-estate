import { Navbar } from "./Navbar";
import { CallButton } from "./CallButton";
import { PiBuildingApartmentFill } from "react-icons/pi";
import propertyImg from "../assets/building/building5.webp";

export const Heading = () => {
  return (
    <section
      data-aos="fade-in-up"
      data-aos-duration="500"
      className="bg-white dark:bg-black h-full col-span-1 grid grid-rows-3 lg:p-4"
    >
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
          Real Estate in India:
          <span className="motion-preset-slide-up-md motion-duration-1500">
            Ideal for Living and Investing
          </span>
        </h1>
      </div>
      <div className="row-span-1 flex justify-between items-end font-inter ">
        <CallButton />
        <a href="#explore" className="flex items-center gap-2 md:gap-4">
          <p className="flex flex-col text-[12px] md:text-[16px] font-medium dark:text-gray-200 text-gray-900 motion-preset-slide-up-sm motion-duration-1500">
            Explore All <span>Our Properties</span>
          </p>
          <img
            src={propertyImg}
            className="rounded-full h-10 w-10 md:h-14 md:w-14 motion-scale-in-50 motion-duration-1500"
          />
        </a>
      </div>
    </section>
  );
};
