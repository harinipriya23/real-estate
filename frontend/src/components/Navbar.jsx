import AOS from "aos";
import { useState, useEffect } from "react";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";

export const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");

    setTimeout(() => {
      AOS.refresh();
    }, 200);
  };
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="motion-scale-in-50 motion-duration-1500 hover:-motion-rotate-in-180 hover:motion-duration-500"
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
