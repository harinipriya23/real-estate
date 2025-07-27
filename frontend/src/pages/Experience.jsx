import { ETeam } from "../components/ETeam";
import { EImage } from "../components/EImage";

export const Experience = () => {
  return (
    <section
      id="#about"
      className="grid grid-cols-1 lg:grid-cols-2 w-full p-4 gap-4 bg-neutral-200 rounded-xl text-black dark:bg-neutral-800 dark:text-neutral-100"
    >
      <ETeam />
      <EImage />
    </section>
  );
};
