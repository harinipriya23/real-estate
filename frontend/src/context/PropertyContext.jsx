import axios from "axios";
import { propertyData } from "../layoutData/PropertyData";
import {filterReducer, initialState} from "../reducer/PropertyFilterReducer"
import { createContext, useState, useEffect, useContext, useReducer } from "react";

// create context
const PropertyContext = createContext();

// create provider
export const PropertyProvider = ({ children }) => {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    const url = "https://real-estate-4ama.onrender.com/api/propertyType";
    try {
      console.log("loading")
      const response = await axios.get(url);
      console.log(response.data);
      setProperties(response.data);
    } catch (error) {
      console.error("Something went wrong in fetching properties", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const priceRanges = [
    { label: "Any price", min: null, max: null },
    { label: "₹50L - ₹1Cr", min: 5000000, max: 10000000 },
    { label: "₹1Cr - ₹10Cr", min: 10000000, max: 100000000 },
    { label: "₹10Cr - ₹25Cr", min: 100000000, max: 250000000 },
    { label: "₹25Cr - ₹50Cr", min: 250000000, max: 500000000 },
  ];
  const purpose = [{ label: "Buy" }, { label: "Rent" }];

  const [filterState, filterDispatch] = useReducer(filterReducer, initialState)


  const filteredProperties = properties.filter((item) => {
    const { purpose, location, priceRange } = filterState;

    const matchedPurpose = item.status == purpose;
    const matchedLocation = !location || item.location.toLowerCase().includes(location.toLowerCase())
    const matchedMinPrice =
      priceRange.min == null || item.price >= priceRange.min;
    const matchedMaxPrice =
      priceRange.max == null || item.price <= priceRange.max;

    return matchedPurpose && matchedLocation && matchedMaxPrice && matchedMinPrice;
  });

  return (
    <PropertyContext.Provider value={{
      properties, loading, propertyData, priceRanges, purpose, filterState, filterDispatch, filteredProperties
    }}>
      {children}
    </PropertyContext.Provider>
  );
};

// custom hook
export const usePropertyContext = () => useContext(PropertyContext);