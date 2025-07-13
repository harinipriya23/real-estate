import React from "react";

export const BSubcribe = () => {
  return (
    <section>
      {" "}
      <div className="font-poppins md:text-center space-y-2 my-2">
        <h3 className="font-semibold">Subscribe to our news</h3>
        <div className="flex items-center justify-center space-x-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 w-full md:w-1/2 border border-neutral-300 rounded-md text-xs md:text-sm lg:text-base"
          />
          <button className="bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded-md text-xs md:text-sm lg:text-base">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-neutral-500">
        © 2025 Real Estate. All rights reserved.
        <span className="mx-2">|</span>
        <a href="#" className="underline">
          Terms
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="underline">
          Privacy
        </a>
      </div>
    </section>
  );
};
