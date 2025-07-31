import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import { PropertyDetails } from "./pages/PropertyDetails";
import { usePropertyContext } from "./context/PropertyContext";
import { SpecificPropertyType } from "./pages/SpecificPropertyType";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { loading } = usePropertyContext();

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/specific-type/:type" element={<SpecificPropertyType />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
