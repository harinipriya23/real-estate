import { Navbar } from "./Navbar";
import buildingImg from "../assets/building/building4.avif";
export const Hero = () => {
  return (
    <div className="min-h-svh w-full grid grid-cols-1 lg:grid-cols-2  p-4 lg:p-8 gap-4">
      <section className="bg-white dark:bg-black h-full col-span-1 grid grid-rows-3">
        <div className="flex justify-between row-span-1">
          <img src="logo2.png" className="h-7 w-7 lg:h-10 lg:w-10" />
          <Navbar />
        </div>
        <div className=" row-span-1 text-center px-4 font-poppins">
          <p className="text-sm motion-preset-slide-up-md motion-duration-1500">
            Building Your Dreams
          </p>
          <h1 className="flex flex-col items-center text-2xl sm:text-4xl lg:text-5xl font-extrabold motion-preset-slide-up-md motion-duration-1500">
            Real Estate in India:
            <span className="motion-preset-slide-up-md motion-duration-1500">
              Ideal for Living and Investing
            </span>
          </h1>
        </div>
        <div className="row-span-1 flex justify-between items-end  ">
          <button>Call us</button>
          <button>Explore properties</button>
        </div>
      </section>
      <section className="bg-white dark:bg-black h-full col-span-1 relative">
        <div className="flex gap-4 text-[12px] absolute top-5 left-5 z-10">
          <p className="flex flex-col items-center">
            7+ Years of expertise<span>Thousands of happy moves</span>
          </p>
          <p className="flex flex-col items-center">
            Trusted by over 500 happy<span> homeowners and tenants</span>
          </p>
        </div>
        <img
          src={buildingImg}
          className="h-full w-full object-cover rounded-md "
        />
      </section>
    </div>
  );
};

// react icons, tailwind css animate, tailwind css motion, animate on scroll
