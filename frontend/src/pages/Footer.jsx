import { BLinks } from "../components/BLinks";
import { BSubcribe } from "../components/BSubcribe";

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 text-neutral-800 dark:bg-zinc-900 dark:text-white p-8 rounded-xl">
      <BLinks />
      <BSubcribe />
    </footer>
  );
};
