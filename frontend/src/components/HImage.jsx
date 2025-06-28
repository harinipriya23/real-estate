import buildingImg from "../assets/building/building4.avif";

export const HImage = () => {
  return (
    <section className="relative bg-white dark:bg-black h-full col-span-1">
      <img
        src={buildingImg}
        className="h-full w-full object-cover rounded-lg shadow-sm "
      />
      <div className="flex font-medium m-2 p-2 w-fit max-w-full gap-4 text-[12px] md:text-[14px] z-10 absolute top-2 left-1/2 transform -translate-x-1/2 ">
        <p className="flex flex-col items-center whitespace-nowrap">
          7+ Years of expertise<span>Thousands of happy moves</span>
        </p>
        <p className="flex flex-col items-center whitespace-nowrap">
          Trusted by over 500 happy<span> homeowners and tenants</span>
        </p>
      </div>
    </section>
  );
};
