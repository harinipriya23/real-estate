import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <div className="min-h-svh w-full grid grid-cols-1 md:grid-cols-2 scroll-smooth ">
      <section className="bg-white dark:bg-black h-full col-span-1 p-2 md:p-4 grid grid-rows-3">
        <div className="flex justify-between row-span-1">
          <img src="logo2.png" className="h-7 w-7 md:h-10 md:w-10" />
          <Navbar />
        </div>
        <div className=" row-span-1 flex flex-col justify-center items-center px-4">
          <p className="text-sm">Building Your Dreams</p>
          <h1 className="flex flex-col items-center text-2xl sm:text-4xl md:text-5xl ">
            Real Estate in Dubai:<span>Ideal for Living and Investing</span>{" "}
          </h1>
        </div>
        <div className="row-span-1 flex justify-between items-end  ">
          <button>Call us</button>
          <button>Explore properties</button>
        </div>
      </section>
      <section className="bg-green-400 col-span-1">hello</section>
    </div>
  );
};
