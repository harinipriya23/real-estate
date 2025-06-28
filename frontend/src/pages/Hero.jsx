import { Heading } from "../components/Heading";
import { HImage } from "../components/HImage";

export const Hero = () => {
  return (
    <div className="min-h-svh w-full grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
      <Heading />
      <HImage />
    </div>
  );
};

// react icons, tailwind css animate, tailwind css motion, animate on scroll
