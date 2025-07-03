import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export const ExploreProperty = () => {
  const { properties, loading, propertyData } = useContext(PropertyContext);

  if (loading) return <p>Loading properties...</p>;

  return (
    <section className="min-h-svh w-full py-4 bg-neutral-100 rounded-xl text-black dark:bg-zinc-950 dark:text-zinc-100">
      <div>
        <p className="text-xl lg:text-2xl text-center font-bold font-poppins">
          Explore our Properties
        </p>
      </div>
      <div className="gap-4 p-4 md:px-6 md:gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-auto">
        {propertyData.map((item) => (
          <div key={item.id} className={`rounded-lg ${item.span}`}>
            <div>
              <img
                src={item.img}
                alt={item.type}
                className="h-[170px] md:h-[280px] w-full aspect-square object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
