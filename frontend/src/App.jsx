import { Hero } from "./pages/Hero";
import { FAQs } from "./components/FAQs";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Advantages } from "./components/Advantages";
import { PropertyType } from "./components/PropertyType";
import PropertyApi from "./api/PropertyApi";

function App() {
  return (
    <>
      <Hero />
      <PropertyApi />
      {/* <Portfolio />
      <Experience />
      <Advantages />
      <PropertyType />
      <FAQs /> */}
    </>
  );
}

export default App;
