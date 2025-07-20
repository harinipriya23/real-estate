import { partners_light } from "../assets/Partners";
import { partners_dark } from "../assets/Partners";
import Marquee from "react-fast-marquee";

export const FPartners = () => {
  return (
    <section className="h-full lg:h-[200px]">
      <p
        data-aos="fade-in-up"
        data-duration="500"
        className="text-center font-bold font-poppins text-xl md:text-2xl lg:text-3xl mb-4"
      >
        Our Valued Partners
      </p>
      <Marquee speed={50}>
        {partners_dark.map((item, i) => (
          <img
            key={i}
            src={item}
            className="hidden dark:block w-24 h-16 sm:w-28 sm:h-[76px] md:w-32 md:h-20 lg:w-36 lg:h-24 xl:h-28 xl:w-40 object-contain hover:scale-105 hover:duration-700"
          />
        ))}
        {partners_light.map((item, i) => (
          <img
            key={i}
            src={item}
            className="block dark:hidden w-24 h-16 sm:w-28 sm:h-[76px] md:w-32 md:h-20 lg:w-36 lg:h-24 xl:h-28 xl:w-40 object-contain hover:scale-105 hover:duration-700"
          />
        ))}
      </Marquee>
    </section>
  );
};
