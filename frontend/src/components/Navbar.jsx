import React from "react";
import { useState } from "react";
import { HiSun } from "react-icons/hi";
import { CgMenuRight } from "react-icons/cg";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex gap-2">
      <CgMenuRight className="h-4 md:h-5 w-4 md:w-5" />
      <button onClick={toggleTheme} className="h-4 md:h-5 w-4 md:w-5">
        {theme === "light" ? <BsMoonStarsFill /> : <BsFillSunFill />}{" "}
      </button>
    </div>
  );
};
