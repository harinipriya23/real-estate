import { useContext } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { PropertyContext } from "../context/PropertyContext";

export const ExploreProperty = () => {
  const { loading, propertyData } = useContext(PropertyContext);

  if (loading) return <p>Loading properties...</p>;

  return (
    <section className="min-h-svh w-full py-4 lg:py-6 lg:px-4 bg-neutral-100 rounded-xl text-black dark:bg-zinc-950 dark:text-zinc-100">
      <div>
        <p
          data-aos="slide-up"
          data-aos-duartion="200"
          className="text-xl lg:text-3xl xl:text-4xl text-center font-bold font-poppins"
        >
          Explore our Properties
        </p>
      </div>
      <div className="gap-4 p-4 md:px-6 lg:px-8 xl:px-10 md:gap-8 grid grid-cols-2 md:grid-cols-11 lg:grid-cols-12">
        <p
          data-aos="fade-in-up"
          data-aos-duration="500"
          data-aos-delay="1000"
          className=" md:col-start-8 lg:col-start-8 md:col-span-3 lg:col-span-4 cols-start-2 row-start-1 text-[16px] md:text-[18px] md:px-2 lg:text-[20px] lg:font-bold font-semibold font-inter px-4 text-center self-center"
        >
          Premium properties in prime locations with every facility you need
        </p>
        {propertyData.map((item, i) => (
          <div
            key={i}
            data-aos="flip-right"
            data-aos-delay={i * 150}
            className={`${item.span}`}
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.type}
                className="h-[170px] sm:h-[220px] lg:h-[200px] w-full object-cover rounded-xl"
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
          className="row-start-5 md:col-start-2 md:row-start-3 md:col-span-3 lg:col-start-2 lg:col-span-4 text-[16px] md:text-[18px] md:px-2 lg:text-[20px] lg:font-bold font-semibold font-inter px-4 text-center self-center"
        >
          Designed with care, build on trust, your satisfaction is our promise
        </p>
      </div>
    </section>
  );
};
