import axios from "axios";
import { propertyData } from "./propertyData";
import { createContext, useState, useEffect } from "react";

// create context
export const PropertyContext = createContext();

// create provider
export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    const url = "http://localhost:9000/api/properties";

    try {
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
    <PropertyContext.Provider value={{ properties, loading, propertyData }}>
      {children}
    </PropertyContext.Provider>
  );
};
