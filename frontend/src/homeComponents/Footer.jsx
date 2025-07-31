import { BLinks } from "../components/BLinks";
import { BSubscribe } from "../components/BSubscribe";

export const Footer = () => {
  return (
    <footer className="bg-neutral-50 text-neutral-800 dark:bg-zinc-900 dark:text-white p-8 rounded-xl">
      <BLinks />
      <BSubscribe />
    </footer>
  );
};
