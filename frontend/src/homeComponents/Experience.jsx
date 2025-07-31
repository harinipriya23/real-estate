import CountUp from "react-countup";
import { TiPlus } from "react-icons/ti";
import { FaPercent } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { useInView } from "react-intersection-observer";

export const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const team = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
  ];

  return (
    <main id="#about" className="grid grid-cols-1 lg:grid-cols-2 w-full p-4 gap-4 bg-neutral-200 rounded-xl 
    text-black dark:bg-neutral-800 dark:text-neutral-100">
      <section className="rounded-lg p-4 h-full bg-white text-black dark:bg-neutral-950 dark:text-white">
        <div className="flex flex-col gap-4 p-2 md:p-4">
          <p data-aos="fade-in-up" data-aos-duration="1000" className="font-inter text-sm md:text-base lg:text-lg text-justify"          >
            We’re a team of dedicated professionals passionate about connecting people with the right properties - whether it's a resort, plot,
            farmhouse, or commercial space. With a focus on trust, clarity, and  personalized service, we’re here to guide you every step of the way.
          </p>
          <div className="flex gap-4 items-center">
            <div className="flex -space-x-4 items-center">
              {team.map((item, i) => (
                <img key={i} data-aos="zoom-in-right" data-aos-duration="200" data-aos-delay={i * 100} src={item}
                  className="h-12 w-12 md:h-14 md:w-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 hover:scale-105 rounded-full border-white border-2 dark:border-black object-top object-cover" />
              ))}
            </div>
            <p data-aos="fade-in-up" data-aos-duration="500" className="font-medium font-inter text-base md:text-lg lg:text-xl whitespace-nowrap">
              Meet our <br /> Professionals
            </p>
          </div>
        </div>
        <div data-aos="fade-in" className="p-4 flex flex-col gap-2 md:gap-4 xl:gap-6">
          <div data-aos="zoom-in" data-duration="500" className="flex items-center gap-2 p-2">
            <div ref={ref} className="flex items-center gap-1 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-[75px] md:w-[100px] lg:w-[150px]  p-1">
              <span>
                {inView ? <CountUp start={0} end={297} duration={6} /> : "0"}
              </span>
              <TiPlus size={20} className="mt-1 lg:mt-2 lg:h-10 lg:w-10" />
            </div>
            <p className="text-base md:text-xl md:font-semibold lg:text-2xl font-medium font-inter ">
              Successful Deals
            </p>
          </div>
          <div data-aos="zoom-in" data-duration="500" className="flex items-center gap-2 p-2">
            <div ref={ref} className="flex items-center gap-1 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-[75px] md:w-[100px] lg:w-[150px]  p-1">
              <span>
                {inView ? <CountUp start={0} end={97} duration={6} /> : "0"}
              </span>
              <FaPercent size={18} className="mt-1 lg:mt-2 lg:h-8 lg:w-8" />
            </div>
            <p className="text-base md:text-xl md:font-semibold lg:text-2xl font-medium font-inter ">
              Happy Clients
            </p>
          </div>
          <div data-aos="zoom-in" data-duration="500" className="flex items-center gap-2 p-2">
            <div ref={ref} className="flex items-center gap-1 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold w-[75px] md:w-[100px] lg:w-[150px] p-1">
              <span>
                {inView ? <CountUp start={0} end={520} duration={6} /> : "0"}
              </span>
              <TiPlus size={20} className="mt-1  lg:mt-2 lg:h-10 lg:w-10" />
            </div>
            <p className="text-base md:text-xl md:font-semibold lg:text-2xl font-medium font-inter ">
              Verified Properties
            </p>
          </div>
        </div>
      </section>
      <section className="relative">
        <img data-aos="fade-in-up" data-aos-duration="300" className="rounded-lg object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <a href="tel:+911234567890" data-aos="fade-in-up" data-delay-duration="200" data-aos-duration="300"
          className="absolute group right-5 top-5 flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white rounded-full p-1 pr-3 md:p-2 md:pr-5">
          <TbPhoneCall data-aos="zoom-in" data-delay-duration="200" data-aos-duration="300"
            className="bg-black text-white dark:bg-white dark:text-black  group-hover:-motion-rotate-in-180 group-hover:motion-duration-500  w-6 h-6 p-1 rounded-full motion-preset-pulse motion-duration-1500 motion-scale-in-50" />
          <span className="text-[12px] md:text-[14px] xl:text-[16px] font-medium">
            Call us now
          </span>
        </a>
        <div data-aos="fade-in-up" data-delay-duration="200" data-aos-duration="300"
          className="absolute group rounded-lg flex gap-4 items-center p-2 md:p-4 bottom-5 right-5 bg-white dark:bg-black text-black dark:text-white">
          <img className="w-8 h-8 md:w-12 md:h-12 object-cover object-top rounded-full group-hover:scale-105 motion-preset-pulse-sm duration-1000 border-2 border-black dark:border-white"
            src="https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D" />
          <p className="whitespace-nowrap text-[10px] md:text-base font-inter">
            Get the Consultation <br /> With Our Expert
          </p>
        </div>
      </section>
    </main>
  );
};
