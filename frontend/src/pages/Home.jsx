import { Hero } from '../homeComponents/Hero';
import { Properties } from "../homeComponents/Properties"
import { PropertyType } from "../homeComponents/PropertyType"
import { Experience } from "../homeComponents/Experience"

export const Home = () => {
  return (<main>
    <Hero />
    <Properties />
    <PropertyType />
    <Experience />
    {/* <Advantages /> */}
    {/*      <FAQs />
            <StartJourney />
            <Footer /> */}
  </main>
  )
}
