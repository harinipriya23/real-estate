import { FAQs } from "../homeComponents/FAQs"
import { Hero } from '../homeComponents/Hero';
import { Properties } from "../homeComponents/Properties"
import { Experience } from "../homeComponents/Experience"
import { Advantages } from "../homeComponents/Advantages"
import { StartJourney } from "../homeComponents/StartJourney"
import { PropertyType } from "../homeComponents/PropertyType"

export const Home = () => {
  return (
    <main>
      <Hero />
      <Properties />
      <PropertyType />
      <Experience />
      <Advantages />
      <FAQs />
      <StartJourney />
    </main>
  )
}
