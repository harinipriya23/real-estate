import { ECard } from "./ECard";

export const ETeam = () => {
  const team = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmVtYWxlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1614786269829-d24616faf56d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
  ];

  return (
    <section className="rounded-lg p-4 h-full bg-white text-black dark:bg-neutral-950 dark:text-white">
      <div className="flex flex-col gap-4 p-2 md:p-4">
        <p
          data-aos="fade-in-up"
          data-aos-duration="1000"
          className="font-inter text-sm md:text-base lg:text-lg text-justify"
        >
          We’re a team of dedicated professionals passionate about connecting
          people with the right properties - whether it's a resort, plot,
          farmhouse, or commercial space. With a focus on trust, clarity, and
          personalized service, we’re here to guide you every step of the way.
        </p>

        <div className="flex gap-4 items-center">
          <div className="flex -space-x-4 items-center">
            {team.map((item, i) => (
              <img
                key={i}
                data-aos="zoom-in-right"
                data-aos-duration="200"
                data-aos-delay={i * 100}
                src={item}
                className="h-12 w-12 md:h-14 md:w-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 hover:scale-105 rounded-full border-white border-2 dark:border-black object-top object-cover"
              />
            ))}
          </div>
          <p
            data-aos="fade-in-up"
            data-aos-duration="500"
            className="font-medium font-inter text-base md:text-lg lg:text-xl whitespace-nowrap"
          >
            Meet our <br /> Professionals
          </p>
        </div>
      </div>
      <ECard />
    </section>
  );
};
