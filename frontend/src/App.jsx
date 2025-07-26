import AOS from "aos";
import "aos/dist/aos.css";
import { Hero } from "./pages/Hero";
import { FAQs } from "./pages/FAQs";
import { Footer } from "./pages/Footer";
import { useEffect } from "react";
import { Experience } from "./pages/Experience";
import { Advantages } from "./pages/Advantages";
import { StartJourney } from "./pages/StartJourney";
import { ExploreProperty } from "./pages/ExploreProperty";
import { AdvancedProperties } from "./pages/AdvancedProperties";
import { usePropertyContext } from "./context/PropertyContext";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { loading } = usePropertyContext();

  if (loading) <p>LOADING...</p>;
  return (
    <>
      {!loading && (
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
      )}
    </>
  );
}

export default App;
