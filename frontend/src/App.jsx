import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./reusableComponents/Loading";
import { PropertyDetails } from "./pages/PropertyDetails";
import { usePropertyContext } from "./context/PropertyContext";
import { SpecificPropertyType } from "./pages/SpecificPropertyType";
import ScrollToTop from "./reusableComponents/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { loading } = usePropertyContext();

  if (loading) return <Loading />;

  return (
    <>
      <ScrollToTop />
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
