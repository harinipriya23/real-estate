import { BsArrowUpRightCircle } from "react-icons/bs";
import {usePropertyContext } from "../context/PropertyContext";

export const ExploreProperty = ({ setSelectedProperty, selectedProperty }) => {
  const { loading, propertyData, properties } = usePropertyContext();

  if (loading) return <p>Loading properties...</p>;

  const filteredProperties = selectedProperty
    ? properties.filter((item) => item.type == selectedProperty)
    : properties;
  console.log(filteredProperties);

  return (
    <section
      id="properties"
      className="w-full py-4 lg:py-6 lg:px-4 bg-neutral-100 rounded-xl text-black dark:bg-neutral-900 dark:text-neutral-100"
    >
      <div className="gap-4 p-4 md:px-6 lg:px-8 xl:px-10 md:gap-8 grid grid-cols-2 md:grid-cols-11 lg:grid-cols-12">
        <p
          data-aos="fade-in-up"
          data-aos-duration="500"
          data-aos-delay="1000"
          className=" md:col-start-8 lg:col-start-8 md:col-span-3 lg:col-span-4 cols-start-2 row-start-1 md:px-2 text-sm sm:text-base md:text-lg font-medium font-poppins px-4 text-center self-center"
        ></p>
        {propertyData.map((item, i) => (
          <div
            key={i}
            data-aos="zoom-in-up"
            data-aos-delay={i * 100}
            className={`${item.span}`}
          >
            <div
              onClick={() => setSelectedProperty(item.link)}
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
          className="row-start-5 md:col-start-2 md:row-start-3 md:col-span-3 lg:col-start-2 lg:col-span-4 text-sm sm:text-base md:text-lg md:px-2 font-medium font-poppins px-4 text-center self-center"
        >
          Premium properties in prime locations with every facility you need
        </p>
      </div>
      {filteredProperties.map((item) => (
        <div key={item.id}>{item.propertyName}</div>
      ))}
    </section>
  );
};
