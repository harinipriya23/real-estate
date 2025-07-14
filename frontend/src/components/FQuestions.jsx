import { useState } from "react";
import { faqData } from "../context/Q&Answers";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

export const FQuestions = () => {
  const [isOpenId, setIsOpenId] = useState(null);

  const handleAnswers = (id) => {
    setIsOpenId(isOpenId === id ? null : id);
  };
  return (
    <section className="md:col-span-2 md:col-start-3 font-inter rounded-lg bg-white text-black dark:bg-neutral-900 dark:text-white m-2 p-4">
      {faqData.map(({ id, question, answer }) => (
        <div
          key={id}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          onClick={() => handleAnswers(id)}
          role="button"
          aria-expanded={isOpenId === id}
          tabIndex="0"
          className="p-4 my-2 rounded-md shadow-md shadow-black/20"
        >
          <div className="grid grid-cols-12 place-items-center gap-4">
            <p className="text-base font-semibold col-span-11">{question}</p>
            <span className="size-7 hover:scale-110 duration-200 col-span-1">
              {isOpenId === id ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </span>
          </div>
          <div
            className={` transition-all duration-1000 ease-in-out overflow-hidden ${
              isOpenId === id
                ? "max-h-30 opacity-100 mt-3"
                : "max-h-0 opacity-0"
            }`}
          >
            <p data-aos="fade-in-up" className="text-sm text-center">
              {answer}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
