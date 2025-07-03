import React from "react";
import axios from "axios";
import { createContext, useState, useEffect } from "react";

// create context
export const PropertyContext = createContext();

// create provider
export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const propertyData = [
    {
      id: 0,
      type: "Resort",
      img: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
    },
    {
      id: 1,
      type: "Apartment",
      img: "https://images.unsplash.com/photo-1608974007646-4343e2b83b77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
      link: "",
    },
    {
      id: 2,
      type: "Villa",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGx1eHVyeSUyMHZpbGxhfGVufDB8fDB8fHww",
      link: "",
    },
    {
      id: 3,
      type: "Studio Apartment",
      img: "https://images.unsplash.com/photo-1709145883296-4443310e3be0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
      link: "",
    },
    {
      id: 4,
      type: "Row House",
      img: "https://images.unsplash.com/photo-1651733834052-71680694092a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxyb3clMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      link: "",
    },
    {
      id: 5,
      type: "Penthouse",
      img: "https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdXNlfGVufDB8fDB8fHww",
      link: "",
    },
    {
      id: 6,
      type: "Farmhouse",
      img: "https://images.unsplash.com/photo-1674306147096-d4c052b9816d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
      link: "",
    },
    {
      id: 7,
      type: "Plot",
      img: "https://images.pexels.com/photos/32798469/pexels-photo-32798469.jpeg",
      link: "",
    },
    {
      id: 8,
      type: "Independent House",
      img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fHww",
      link: "",
    },
    {
      id: 9,
      type: "Townhouse",
      img: "https://images.unsplash.com/photo-1705825533722-e562d3ee873c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRvd24lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      link: "",
    },
    {
      id: 10,
      type: "Duplex",
      img: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      link: "",
    },
    {
      id: 11,
      type: "Mansion",
      img: "https://images.unsplash.com/photo-1548713740-2a50e43f0830?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "",
    },
  ];

  const fetchProperties = async () => {
    const url = "https://real-estate-4ama.onrender.com/properties";
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
