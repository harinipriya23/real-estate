import axios from "axios";
import { propertyData } from "./propertyData";
import { initialState, filterReducer } from "../reducerState/FilterState";
import { createContext, useState, useEffect, useReducer, useContext } from "react";

// create context
const PropertyContext = createContext();

// create provider
export const PropertyProvider = ({ children }) => {

  const [filterState, filterDispatch] = useReducer(filterReducer, initialState)
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
      properties, loading, propertyData,
      filterState, filterDispatch, filteredProperties,
    }}>
      {children}
    </PropertyContext.Provider>
  );
};

// custom hook
export const usePropertyContext = () => useContext(PropertyContext);