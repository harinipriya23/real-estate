import { TbPhoneCall } from "react-icons/tb";

export const CallButton = () => {
  return (
    <a
      href="tel:+911234567890"
      className="inline-flex md:my-2 items-center gap-2 bg-black hover:bg-neutral-800 duration-300 group dark:bg-white dark:hover:bg-neutral-300 text-white dark:text-black rounded-full p-1 pr-3 md:p-2 md:pr-5 motion-preset-slide-right-md motion-duration-1500"
    >
      <TbPhoneCall className="bg-white text-black dark:bg-black dark:text-white  group-hover:-motion-rotate-in-180 group-hover:motion-duration-500 w-6 h-6 p-1 rounded-full motion-scale-in-50 motion-duration-1500 motion-preset-pulse" />{" "}
      <span className="text-[12px] md:text-[14px] xl:text-[16px]">
        Call us now
      </span>
    </a>
  );
};
