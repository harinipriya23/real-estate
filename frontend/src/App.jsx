import { Hero } from "./pages/Hero";
import { FAQs } from "./components/FAQs";
import { ExploreProperty } from "./pages/ExploreProperty";
import { Experience } from "./components/Experience";
import { Advantages } from "./components/Advantages";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <Hero />
      <ExploreProperty />
      <Experience />
      {/* <Advantages />
      <PropertyType />
      <FAQs /> */}
    </>
  );
}

export default App;
