import { useContext } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { PropertyContext } from "../context/PropertyContext";

export const ExploreProperty = () => {
  const { loading, propertyData } = useContext(PropertyContext);

  if (loading) return <p>Loading properties...</p>;

  return (
    <section className="min-h-svh w-full py-4 lg:py-6 lg:px-4 bg-neutral-100 rounded-xl text-black dark:bg-zinc-950 dark:text-zinc-100">
      <div>
        <p className="text-xl lg:text-3xl xl:text-4xl text-center font-bold font-poppins">
          Explore our Properties
        </p>
      </div>
      <div className="gap-4 p-4 md:px-6 lg:px-8 xl:px-10 md:gap-8 grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12">
        {propertyData.map((item) => (
          <div key={item.id} className={`rounded-lg ${item.span}`}>
            <div className="relative">
              <img
                src={item.img}
                alt={item.type}
                className="h-[170px] sm:h-[220px] lg:h-[200px] w-full object-cover rounded"
              />
              <div className="text-white font-roboto tracking-wider text-[16px]">
                <span className="absolute right-5 top-5 text-white">
                  <BsArrowUpRightCircle size={20} />
                </span>
                <p className="absolute inset-0 flex items-end justify-center py-4 bg-neutral-900/30">
                  {item.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
