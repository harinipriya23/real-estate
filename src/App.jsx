import { useState } from "react";
import { Hero } from "./components/Hero";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
