// src/App.jsx or src/components/PropertyApi.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const PropertyApi = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("https://real-estate-4ama.onrender.com/properties")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Properties</h2>
      <ul className="space-y-2">
        {properties.map((property) => (
          <li key={property.id} className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p>{property.location}</p>
            <p>Price: ₹{property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyApi;
