import buildingImg from "../assets/building/building4.avif";

export const HImage = () => {
  return (
    <section
      data-aos="fade-in-up"
      data-aos-duration="500"
      className="relative bg-white dark:bg-black h-full col-span-1"
    >
      <img
        src={buildingImg}
        className="h-full w-full object-cover rounded-lg shadow-sm motion-scale-in-90 motion-duration-1500"
      />
      <div className="flex mt-5 font-roboto font-semibold tracking-wide m-2 p-2 w-fit max-w-full gap-4 text-[10px] md:text-[14px] lg:text-[18px] z-10 absolute top-2 left-1/2 transform -translate-x-1/2 ">
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
