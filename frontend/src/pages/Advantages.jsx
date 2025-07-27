import { advInfo } from "../context/AdvInfo";
import { CallButton } from "../components/CallButton";

export const Advantages = () => {
  return (
    <section
      id="advantages"
      className="w-full bg-white text-black dark:bg-zinc-900 dark:text-white space-y-2 p-4"
    >
      <div className="px-2 space-y-2">
        <p
          data-aos="fade-in-up"
          data-aos-duration="500"
          className=" flex gap-2 items-center text-base md:text-lg font-medium font-roboto"
        >
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white"></span>{" "}
          Explore Our Advantages
        </p>
        <div className="relative capitalize flex justify-between font-poppins text-2xl md:text-4xl lg:text-5xl font-extrabold whitespace-nowrap">
          <div data-aos="fade-in-up" data-aos-duration="500">
            <p>why india stands</p>
            <p className="mt-2 md:mt-4">unrivalled?</p>
          </div>{" "}
          <span className="text-base font-medium absolute bottom-0 right-0">
            <CallButton />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 md:gap-8 p-2 md:mx-4 md:p-4">
        {advInfo.map(({ id, heading, content, icon }) => (
          <div
            key={id}
            data-aos="zoom-in-left"
            data-aos-delay={id * 100}
            className="flex flex-col gap-2 bg-neutral-200 dark:bg-zinc-800 font-inter rounded-md p-4 h-64 sm:h-36 md:h-[260px] lg:h-[250px] xl:h-[220px]"
          >
            <div
              data-aos="fade-in-up"
              data-aos-duration="500"
              data-aos-delay="500"
              className="text-xl md:text-2xl lg:text-3xl"
            >
              {icon}
            </div>
            <p
              data-aos="fade-in-up"
              data-aos-duration="500"
              data-aos-delay="500"
              className="font-medium text-base lg:text-lg h-16 sm:h-5 md:h-16 lg:h-14 xl:h-11"
            >
              {heading}
            </p>
            <p
              data-aos="fade-in-up"
              data-aos-duration="500"
              data-aos-delay="500"
              className="text-xs lg:text-sm text-justify text-neutral-600 dark:text-zinc-300"
            >
              {content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
