import { BsArrowUpRightCircle } from "react-icons/bs";
import { usePropertyContext } from "../context/PropertyContext";
import { propertyData } from "../context/propertyData";
import { PropertyLayout } from "../components/PropertyLayout";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";


export const ExploreProperty = () => {

  const navigate = useNavigate();

  const handlePropertyType = (type) => {
    navigate(`/specific-type/${type}`);
  }

  return (
    <section
      id="properties"
      className="w-full py-4 lg:py-6 lg:px-4 bg-neutral-100 rounded-xl text-black dark:bg-neutral-900 dark:text-neutral-100"
    >
      <p
        data-aos="fade-in-up"
        data-aos-duration="200"
        className="text-xl lg:text-3xl xl:text-4xl text-center font-semibold font-poppins whitespace-nowrap"
      >
        Discover Your Ideal Property Type
      </p>
     <div className="gap-4 p-4 md:px-6 lg:px-8 xl:px-10 md:gap-8 grid grid-cols-2 md:grid-cols-11 lg:grid-cols-12">
        <p
          data-aos="fade-in-up"
          data-aos-duration="500"
          data-aos-delay="1000"
          className=" md:col-start-8 lg:col-start-8 md:col-span-3 lg:col-span-4 cols-start-2 row-start-1 md:px-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium font-poppins px-4 text-center self-center"
        >Property is more than land and structures. It's where dreams begin, communities grow, and legacies are built</p>
        {propertyData.map((item, i) => (
          <div
            key={i}
            data-aos="zoom-in-up"
            data-aos-delay={i * 100}
            className={`${item.span}`}
          >
            <div
              onClick={() => { handlePropertyType(item.type) }}
              className="relative group shadow-md overflow-hidden rounded-xl"
            >
              <img
                src={item.img}
                alt={item.type}
                className="h-[170px] sm:h-[220px] lg:h-[200px] w-full object-cover rounded-xl
                transition-transform duration-500 group-hover:scale-125"
              />
              <div className="text-white font-roboto tracking-wider text-[16px]">
                <span className="absolute right-5 top-5 text-white">
                  <BsArrowUpRightCircle size={20} />
                </span>
                <p className="absolute inset-0 flex items-end justify-center py-4 bg-neutral-900/30 rounded-xl">
                  {item.type}
                </p>
              </div>
            </div>
          </div>
        ))}
        <p
          data-aos="fade-in-up"
          data-aos-duration="500"
          data-aos-delay="1000"
          className="row-start-5 md:col-start-2 md:row-start-3 md:col-span-3 lg:col-start-2 lg:col-span-4 text-xs sm:text-sm md:text-base lg:text-lg  md:px-2 font-medium font-poppins px-4 text-center self-center"
        >
          For generations, we’ve been the trusted bridge between people and their ideal properties.</p>
      </div> 
    </section>
  );
};
