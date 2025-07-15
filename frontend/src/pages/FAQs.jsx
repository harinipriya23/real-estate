import { FHeading } from "../components/FHeading";
import { FPartners } from "../components/FPartners";
import { FQuestions } from "../components/FQuestions";

export const FAQs = () => {
  return (
    <section
      id="faqs"
      className="w-full rounded-xl p-4 space-y-4 bg-neutral-100 text-black dark:bg-black dark:text-white"
    >
      <FPartners />
      <div className="flex flex-col lg:flex-row overflow-hidden">
        <FHeading />
        <FQuestions />
      </div>
    </section>
  );
};
