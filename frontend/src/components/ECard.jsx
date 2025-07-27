import CountUp from "react-countup";
import { TiPlus } from "react-icons/ti";
import { FaPercent } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export const ECard = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      data-aos="fade-in"
      className="p-4 flex flex-col gap-2 md:gap-4 xl:gap-6"
    >
      <div
        data-aos="zoom-in"
        data-duration="500"
        className="flex items-center gap-2 p-2"
      >
        <div
          ref={ref}
          className="flex items-center gap-1 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-[75px] md:w-[100px] lg:w-[150px]  p-1"
        >
          <span>
            {inView ? <CountUp start={0} end={297} duration={6} /> : "0"}
          </span>
          <TiPlus size={20} className="mt-1 lg:mt-2 lg:h-10 lg:w-10" />
        </div>
        <p className="text-base md:text-xl md:font-semibold lg:text-2xl font-medium font-inter ">
          Successful Deals
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-duration="500"
        className="flex items-center gap-2 p-2"
      >
        <div
          ref={ref}
          className="flex items-center gap-1 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-[75px] md:w-[100px] lg:w-[150px]  p-1"
        >
          <span>
            {inView ? <CountUp start={0} end={97} duration={6} /> : "0"}
          </span>
          <FaPercent size={18} className="mt-1 lg:mt-2 lg:h-8 lg:w-8" />
        </div>
        <p className="text-base md:text-xl md:font-semibold lg:text-2xl font-medium font-inter ">
          Happy Clients
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-duration="500"
        className="flex items-center gap-2 p-2"
      >
        <div
          ref={ref}
          className="flex items-center gap-1 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-[75px] md:w-[100px] lg:w-[150px] p-1"
        >
          <span>
            {inView ? <CountUp start={0} end={520} duration={6} /> : "0"}
          </span>{" "}
          <TiPlus size={20} className="mt-1  lg:mt-2 lg:h-10 lg:w-10" />
        </div>{" "}
        <p className="text-base md:text-xl md:font-semibold lg:text-2xl font-medium font-inter ">
          Verified Properties
        </p>
      </div>
    </section>
  );
};
