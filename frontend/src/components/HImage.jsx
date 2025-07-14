import { useState, useEffect } from "react";
import house1 from "../assets/house/house2.webp";
import house2 from "../assets/house/house3.jpg";
import buildingImg1 from "../assets/building/building4.avif";
import buildingImg2 from "../assets/building/building5.webp";

export const HImage = () => {
  const img = [buildingImg1, buildingImg2, house1, house2];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      data-aos="fade-in-up"
      data-aos-duration="500"
      className="relative bg-white dark:bg-black h-full col-span-1"
    >
      <img
        src={img[currentIndex]}
        className="h-full w-full object-cover rounded-lg shadow-sm motion-scale-in-90 motion-duration-1500"
      />
      <div className="absolute top-0 left-0 right-0 bg-black/30 h-full font-medium text-white z-10 px-4 py-10 flex items-start justify-evenly text-[10px] md:text-[14px] lg:text-[16px]">
        <p className="flex flex-col items-center whitespace-nowrap motion-preset-slide-up-md motion-duration-1500">
          7+ Years of Expertise<span>Thousands of happy moves</span>
        </p>
        <p className="flex flex-col items-center whitespace-nowrap motion-preset-slide-up-md motion-duration-1500">
          Trusted by over 500 Happy<span> Homeowners and Tenants</span>
        </p>
      </div>
    </section>
  );
};
