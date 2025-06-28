import { Hero } from "./components/Hero";
import { FAQs } from "./components/FAQs";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Advantages } from "./components/Advantages";
import { PropertyType } from "./components/PropertyType";
import GeocodeA from "./api/GeocodeAddress";

function App() {
  return (
    <>
      <Hero />
      <GeocodeA />
      <Portfolio />
      <Experience />
      <Advantages />
      <PropertyType />
      <FAQs />
    </>
  );
}

export default App;
