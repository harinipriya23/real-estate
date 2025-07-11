import { FPartners } from "../components/FPartners";
import { FHeading } from "../components/FHeading";
import { FQuestions } from "../components/FQuestions";

export const FAQs = () => {
  return (
    <section className="min-h-svh w-full rounded-xl p-4 space-y-4 bg-neutral-100 text-black dark:bg-black dark:text-white">
      <FPartners />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <FHeading />
        <FQuestions />
      </div>
    </section>
  );
};
