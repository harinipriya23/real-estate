import { CallButton } from "./CallButton";
export const FHeading = () => {
  return (
    <section className="md:col-span-2 md:flex md:flex-col md:items-center px-2 space-y-2 md:space-y-4">
      <p
        data-aos="fade-in-up"
        data-aos-duration="500"
        className=" flex gap-2 items-center text-base sm:text-lg md:text-xl font-medium font-roboto"
      >
        <span className="w-2 h-2 rounded-full bg-black dark:bg-white font-inter"></span>
        Explore Property FAQs
      </p>
      <div className="capitalize self-center relative space-y-2 md:space-y-4 font-poppins text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
        <div
          data-aos="fade-in-up"
          data-aos-duration="500"
          className="space-y-2"
        >
          <p>Frequently Asked</p>
          <p>Questions</p>
        </div>
        <div className="absolute bottom-2 right-2 md:static text-base font-normal">
          <CallButton />
        </div>
      </div>
    </section>
  );
};
