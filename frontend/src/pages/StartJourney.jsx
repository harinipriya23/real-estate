import img from "../assets/building/image.png";

export const StartJourney = () => {
  return (
    <section className="w-full p-4 bg-neutral-100 dark:bg-black">
      <div className="relative w-full max-h-screen rounded-lg overflow-hidden">
        <img
          data-aos="fade-in-up"
          data-aos-duration="500"
          className="object-cover object-center w-full h-full"
          src={img}
          alt="Hero"
        />

        <div
          data-aos="fade-in-up"
          data-aos-duration="1000"
          className="absolute inset-0 bg-black/30 flex flex-col items-start justify-start gap-4 p-6 text-white dark:text-black font-poppins"
        >
          <p className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold">
            Build Your Future
          </p>
          <p className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold">
            With Us
          </p>
          <button
            className="bg-white dark:bg-black text-black dark:text-white py-1 px-2 lg:py-2 lg:px-4 rounded-md  font-medium text-sm md:text-base lg:text-xl
          overflow-hidden transition-all duration-300 hover:scale-110"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};
