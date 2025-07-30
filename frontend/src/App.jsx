import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Hero } from "./pages/Hero";
import { FAQs } from "./pages/FAQs";
import { Footer } from "./pages/Footer";
import { Experience } from "./pages/Experience";
import { Advantages } from "./pages/Advantages";
import { StartJourney } from "./pages/StartJourney";
import {PropertyDetails} from "./pages/PropertyDetails";
import { ExploreProperty } from "./pages/ExploreProperty";
import { AdvancedProperties } from "./pages/AdvancedProperties";
import { usePropertyContext } from "./context/PropertyContext";
import { SpecificPropertyType } from "./components/SpecificPropertyType";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { loading } = usePropertyContext();

  if (loading) return <p>Loading...</p>;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Hero />
            <AdvancedProperties />
            <ExploreProperty />
            <Experience />
            <Advantages />
            <FAQs />
            <StartJourney />
            <Footer />
          </main>
        }
      />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/specific-type/:id" element={<SpecificPropertyType />} />

    </Routes>
  );
}

export default App;
