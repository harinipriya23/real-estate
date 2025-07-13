import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Hero } from "./pages/Hero";
import { FAQs } from "./pages/FAQs";
import { Footer } from "./pages/Footer";
import { Experience } from "./pages/Experience";
import { Advantages } from "./pages/Advantages";
import { ExploreProperty } from "./pages/ExploreProperty";
import { StartJourney } from "./pages/StartJourney";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <Hero />
      <ExploreProperty />
      <Experience />
      <Advantages />
      <FAQs />
      <StartJourney />
      <Footer />
    </>
  );
}

export default App;
