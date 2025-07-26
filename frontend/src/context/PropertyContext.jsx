import axios from "axios";
import { propertyData } from "./propertyData";
import { initalState,filterReducer } from "../filter/FiltersFunctions";
import { createContext, useState, useEffect, useReducer, useContext } from "react";

// create context
const PropertyContext = createContext();

// create provider
export const PropertyProvider = ({ children }) => {

  const [filterState, filterDispatch] = useReducer(filterReducer,initalState)
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

  return (
    <PropertyContext.Provider value={{
      properties, loading, propertyData,
      filterState, filterDispatch
    }}>
      {children}
    </PropertyContext.Provider>
  );
};

// custom hook
export const usePropertyContext = () => useContext(PropertyContext);