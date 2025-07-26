import { useState } from "react";
import { DropDown } from "../components/DropDown";
import { MdKeyboardArrowDown, MdOutlineSearch } from "react-icons/md";
import { usePropertyContext } from "../context/PropertyContext";

export const AdvancedProperties = () => {

  const { properties, filterState, filterDispatch } = usePropertyContext()
  
  const filteredProperties = properties.filter((item) => {
    const { purpose, location, priceRange } = filterState ;
    
    const matchedPurpose = item.status == purpose;
    // const matchedLocation = !location || item.location.toLowerCase().includes(location.toLowerCase())
    const matchedMinPrice = !priceRange.min || Number(item.price) >= priceRange.min
    const matchedMaxPrice = !priceRange.max || Number(item.price) <= priceRange.max
    const hi = properties.map((item) => {
 if(item.status == "Rent") item.propertyName
})
    console.log(hi)
    return matchedPurpose && matchedMaxPrice && matchedMinPrice
  })
  console.log(filterState)
  console.log("filterd : " + filteredProperties)
  const priceRanges = [
    { label: "Any price", min: null, max: null },
    { label: "₹50L - ₹1Cr", min: 5000000, max: 10000000 },
    { label: "₹1Cr - ₹10Cr", min: 10000000, max: 100000000 },
    { label: "₹10Cr - ₹25Cr", min: 100000000, max: 250000000 },
    { label: "₹25Cr - ₹50Cr", min: 250000000, max: 500000000 },
  ];
  const action = [{ label: "Buy" }, { label: "Rent" }];

  const [isActionOpen, setIsActionOpen] = useState(false);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false);
 
  return (
    <section className="w-full py-4 lg:py-6 lg:px-4 bg-neutral-100 rounded-xl text-black dark:bg-neutral-900 dark:text-neutral-100">
      <div className="space-y-2">
        <p
          data-aos="fade-in-up"
          data-aos-duartion="200"
          className="text-xl lg:text-3xl xl:text-4xl text-center font-bold font-poppins"
        >
          Explore our Properties
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:px-32 xl:px-52">
          {" "}
          <div className="flex justify-between gap-4 items-center font-inter px-4 my-2">
            <div className="w-1/2 sm:w-1/3">
              <button
                onClick={() => setIsActionOpen(!isActionOpen)}
                className="flex justify-between items-center w-full px-4 py-2 bg-white rounded-md shadow-sm hover:bg-neutral-200"
              >
               {filterState.purpose}
                <MdKeyboardArrowDown className="ml-2 text-lg" />
              </button>
              {isActionOpen && (
                <DropDown options={action} dispatchType="SET_PURPOSE" isObject={false} />
                 )}
            </div>
            <div className="w-1/2 sm:w-2/3">
              <button
                onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}
                className="flex justify-between items-center w-full px-4 py-2  bg-white rounded-md shadow-sm hover:bg-neutral-200"
              >
                {filterState.priceRange?.label}
                <MdKeyboardArrowDown className="ml-2 text-lg" />
              </button>
              {isPriceRangeOpen && (
                <DropDown
                  options={priceRanges} dispatchType="PRICE_RANGE" isObject={true}
                 
                />
              )}
            </div>{" "}
          </div>
          <div className="flex justify-between gap-4 items-center font-inter px-4 sm:px-0 my-2">
            {" "}
            <div className="relative w-2/3 flex items-center">
              <input   onChange={(e) => filterDispatch({ type: "LOCATION", payload: e.target.value })}
                placeholder="Search location"
                className=" w-full pl-8 py-2 bg-white rounded-md shadow-sm outline-none hover:bg-neutral-50 text-gray-700"
              />
              <MdOutlineSearch className="absolute left-2 size-5 sm:size-6 text-neutral-600" />
            </div>
            <button className="bg-blue-400 w-1/3  rounded-md px-3 py-2">
              Apply
            </button>
          </div>
        </div>
        {filteredProperties.map((item) => (
          <div>{ item.type}</div>
        ))}
      </div>
      {/* <div className="px-4 my-2">
        <p className="font-semibold text-lg font-poppins ">
          Featured properties
        </p>
        <div className=" my-2 px-4 space-y-4 ">
          <div className="relative overflow-hidden group sm:hidden">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].propertyName}
              className="w-full h-[250px] hover:scale-125 object-cover rounded-lg transition-all duration-1000"
            />
            <div className="absolute bg-black/10 inset-0 w-full h-full rounded-lg flex justify-center space-x-2">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white text-center p-4">
                <h2 className="text-lg font-semibold">
                  {slides[currentIndex].propertyName}
                </h2>
                <p className="text-base">{slides[currentIndex].location}</p>
              </div>
              <div className="absolute bottom-4 space-x-2">
                {" "}
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-blue-700" : "bg-neutral-100"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            </div>{" "}
          </div>
          <div className="hidden sm:grid grid-cols-12 sm:gap-4">
            {slides.map(({ id, propertyName, image, location }, index) => {
              const span = colspan[index % colspan.length];
              return (
                <div
                  key={id}
                  className={`relative group h-[180px] lg:h-[280px] ${span}`}
                >
                  <img
                    src={image}
                    alt={propertyName}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white text-center p-4">
                    <h2 className="text-lg font-semibold">{propertyName}</h2>
                    <p className="text-base">{location}</p>
                  </div>
                </div>
              );
            })}
          </div>  
        </div>
      </div> */}
    </section>
  );

  

};
