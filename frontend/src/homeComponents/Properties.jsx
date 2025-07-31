import { useState } from "react";
import { DropDown } from "../reusableComponents/DropDown";
import { usePropertyContext } from "../context/PropertyContext";
import { MdKeyboardArrowDown, MdOutlineSearch } from "react-icons/md";
import { PropertyLayout } from "../reusableComponents/PropertyLayout";


export const Properties = () => {

  const { priceRanges, purpose, filterDispatch, filteredProperties } = usePropertyContext();

  const [isPurposeOpen, setIsPurposeOpen] = useState(false);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false);
  const [tempPurpose, setTempPurpose] = useState('Buy');
  const [tempPriceRange, setTempPriceRange] = useState({ label: "Any price", min: null, max: null });


  const handleApplyFilters = () => {
    filterDispatch({ type: "SET_PURPOSE", payload: tempPurpose });
    filterDispatch({ type: "PRICE_RANGE", payload: tempPriceRange });
  }
  console.log(filteredProperties)

  return (
    <section className="w-full py-4 lg:py-6 lg:px-4 bg-neutral-100 rounded-xl text-black dark:bg-neutral-900 dark:text-neutral-100">
      <div className="space-y-2">
        <p data-aos="fade-in-up" data-aos-duration="200"
          className="text-xl lg:text-3xl xl:text-4xl text-center font-semibold font-poppins">
          Explore our Properties
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:px-32 xl:px-52">
          <div className="flex justify-between gap-4 items-center font-inter px-4 my-2">
            <div className="w-1/2 sm:w-1/3">
              <button onClick={() => setIsPurposeOpen(!isPurposeOpen)}
                className="flex justify-between items-center w-full px-4 py-2 bg-white rounded-md shadow-sm hover:bg-neutral-200"      >
                {tempPurpose}
                <MdKeyboardArrowDown className="ml-2 text-lg" />
              </button>
              {isPurposeOpen && (
                <DropDown options={purpose} onSelect={(value) => setTempPurpose(value)} isOpen={setIsPurposeOpen} isObject={false} />)}
            </div>
            <div className="w-1/2 sm:w-2/3">
              <button onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)} className="flex justify-between items-center 
              w-full px-4 py-2  bg-white rounded-md shadow-sm hover:bg-neutral-200">
                {tempPriceRange.label}
                <MdKeyboardArrowDown className="ml-2 text-lg" />
              </button>
              {isPriceRangeOpen && (
                <DropDown options={priceRanges} onSelect={(value) => setTempPriceRange(value)} isOpen={setIsPriceRangeOpen} isObject={true} />)}
            </div>
          </div>
          <div className="flex justify-between gap-4 items-center font-inter px-4 sm:px-0 my-2">
            <div className="relative w-2/3 flex items-center">
              <input onChange={(e) => filterDispatch({ type: "LOCATION", payload: e.target.value })} placeholder="Search location"
                className=" w-full pl-8 py-2 bg-white rounded-md shadow-sm outline-none hover:bg-neutral-50 text-gray-700" />
              <MdOutlineSearch className="absolute left-2 size-5 sm:size-6 text-neutral-600" />
            </div>
            <button onClick={handleApplyFilters} className="bg-blue-400 hover:bg-red-400 w-1/3  rounded-md px-3 py-2">
              Apply
            </button>
          </div>
        </div>
        <PropertyLayout property={filteredProperties} />
      </div>
    </section>
  );
};
