import { CallButton } from "./CallButton";
export const FHeading = () => {
  return (
    <section className="h-full lg:flex-1 px-2 space-y-2 md:space-y-4">
      <div className="flex justify-between">
        {" "}
        <p
          data-aos="fade-in-up"
          data-aos-duration="500"
          className=" flex gap-2 items-center text-base sm:text-lg md:text-xl font-medium font-roboto"
        >
          <span className="w-2 h-2 rounded-full bg-black dark:bg-white font-inter"></span>
          Explore Property FAQs
        </p>
        <CallButton />
      </div>
      <div className="relative capitalize self-center text-white font-poppins h-full w-full">
        <img
          className="object-cover rounded-md w-full h-[500px] lg:h-[775px] xl:h-[650px]"
          src="https://images.unsplash.com/photo-1592555059503-0a774cb8d477?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
        />
        <div
          data-aos="fade-in-up"
          data-aos-duration="500"
          className="absolute inset-0 bg-black/50 gap-2 md:gap-4 flex flex-col items-center justify-center h-full rounded-md"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
            Frequently Asked
          </p>
          <p className=" text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
            Questions
          </p>
          <p className="font-medium font-inter text-sm md:text-base lg:text-lg md:px-4 lg:px-6">
            Confidence build with clarity
          </p>
        </div>
      </div>
    </section>
  );
};
