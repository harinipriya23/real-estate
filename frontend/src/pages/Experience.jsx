import React from "react";
import { ETeam } from "../components/ETeam";
import { EImage } from "../components/EImage";

export const Experience = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-svh w-full p-4 gap-4 bg-neutral-200 rounded-xl text-black dark:bg-zinc-950 dark:text-zinc-100">
      <ETeam />
      <EImage />
    </section>
  );
};
