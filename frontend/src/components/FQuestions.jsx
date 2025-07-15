import { useState } from "react";
import { faqData } from "../context/Q&Answers";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

export const FQuestions = () => {
  const [isOpenId, setIsOpenId] = useState(null);

  const handleAnswers = (id) => {
    setIsOpenId(isOpenId === id ? null : id);
  };
  return (
    <section className="lg:flex-1 h-full font-inter rounded-lg bg-white text-black dark:bg-neutral-800 dark:text-white m-2 p-4">
      {faqData.map(({ topic, faqs }) => (
        <div>
          <p className="text-base font-poppins md:text-lg font-semibold text-gray-700 dark:text-gray-200">
            {topic}
          </p>
          {faqs.map(({ id, question, answer }) => (
            <div
              key={id}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              onClick={() => handleAnswers(id)}
              role="button"
              aria-expanded={isOpenId === id}
              tabIndex="0"
              className="p-4 my-2 rounded-md grid grid-cols-12 bg-neutral-50 dark:bg-black"
            >
              {" "}
              <span className="size-7 hover:scale-110 duration-400 self-center col-span-1">
                {isOpenId === id ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
              </span>
              <p className="text-base font-semibold col-span-11">{question}</p>
              <div
                className={` transition-all duration-1000 ease-in-out overflow-hidden col-span-12 ${
                  isOpenId === id
                    ? "max-h-30 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p data-aos="fade-in-up" className="text-sm text-justify px-4">
                  {answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
