import { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="motion-scale-in-50 motion-duration-1500"
      >
        {theme === "light" ? (
          <BsMoonStarsFill size={25} />
        ) : (
          <IoSunny size={25} />
        )}{" "}
      </button>
    </div>
  );
};
