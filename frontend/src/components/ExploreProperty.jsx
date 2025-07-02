import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

export const ExploreProperty = () => {
  const { properties, loading } = useContext(PropertyContext);

  if (loading) return <p>Loading properties...</p>;

  return (
    <section className="min-h-svh w-full p-4 gap-4 bg-white text-black dark:bg-zinc-950 dark:text-zinc-100">
      <div className="flex justify-between">
        <p className="text-lg lg:text-2xl font-semibold font-poppins">
          Explore our Properties
        </p>
      </div>
      <div>
        {properties.map((item) => (
          <div className="flex">
            <p>{item.type}</p>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </section>
  );
};
