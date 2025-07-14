import { TbPhoneCall } from "react-icons/tb";

export const CallButton = () => {
  return (
    <a
      href="tel:+918248808144"
      className="inline-flex md:my-2 items-center gap-2 bg-black dark:bg-white text-white dark:text-black rounded-full p-1 pr-3 md:p-2 md:pr-5 motion-preset-slide-right-md motion-duration-1500"
    >
      <TbPhoneCall className="bg-white text-black dark:bg-black dark:text-white w-6 h-6 p-1 rounded-full motion-scale-in-50 motion-duration-1500 motion-preset-pulse" />{" "}
      <span className="text-[12px] md:text-[14px] xl:text-[16px]  ">
        Call us now
      </span>
    </a>
  );
};
