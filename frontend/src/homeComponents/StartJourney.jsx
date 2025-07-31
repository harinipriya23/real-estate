import team from "../assets/img/team.png";

export const StartJourney = () => {
  return (
    <section className="w-full p-4 bg-neutral-100 dark:bg-neutral-800">
      <div className="relative w-full max-h-screen rounded-lg overflow-hidden">
        <img data-aos="fade-in-up" data-aos-duration="500" src={team} alt="Hero" className="object-cover object-center w-full h-full" />
        <div data-aos="fade-in-up" data-aos-duration="1000"
          className="absolute inset-0 bg-black/30 flex flex-col items-start justify-start gap-4 p-6 text-white font-poppins">
            <p className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-extrabold">
            Build Your Future
          </p>
          <p className="text-2xl md:text-4xl lg:text-6xl xl:text-9xl font-extrabold">
            With Us
          </p>
          <button className="bg-white/50 text-black  py-1 px-2 lg:py-2 lg:px-4 rounded-md font-medium text-sm md:text-base overflow-hidden transition-all duration-500 hover:scale-95 hover:bg-black/50 hover:text-white">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};
