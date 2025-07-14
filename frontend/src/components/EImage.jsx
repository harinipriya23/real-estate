import { TbPhoneCall } from "react-icons/tb";

export const EImage = () => {
  return (
    <section className="relative">
      <img
        data-aos="fade-in-up"
        data-aos-duration="300"
        className="rounded-lg object-cover h-full w-full"
        src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <a
        href="tel:+911234567890"
        data-aos="fade-in-up"
        data-delay-duration="200"
        data-aos-duration="300"
        className="absolute group right-5 top-5 flex items-center gap-2 bg-white dark:bg-black text-black dark:text-white rounded-full p-1 pr-3 md:p-2 md:pr-5"
      >
        <TbPhoneCall
          data-aos="zoom-in"
          data-delay-duration="200"
          data-aos-duration="300"
          className="bg-black text-white dark:bg-white dark:text-black  group-hover:-motion-rotate-in-180 group-hover:motion-duration-500  w-6 h-6 p-1 rounded-full  motion-preset-pulse motion-duration-1500 motion-scale-in-50"
        />
        <span className="text-[12px] md:text-[14px] xl:text-[16px] font-medium">
          Call us now
        </span>
      </a>
      <div
        data-aos="fade-in-up"
        data-delay-duration="200"
        data-aos-duration="300"
        className="absolute group rounded-lg flex gap-4 items-center p-2 md:p-4 bottom-5 right-5 bg-white dark:bg-black text-black dark:text-white"
      >
        <img
          className="w-8 h-8 md:w-12 md:h-12 object-cover object-top rounded-full group-hover:scale-105 motion-preset-pulse-sm duration-1000 border-2 border-black dark:border-white"
          src="https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <p className="whitespace-nowrap text-[10px] md:text-base font-inter">
          Get the Consultation <br /> With Our Expert
        </p>
      </div>
    </section>
  );
};
