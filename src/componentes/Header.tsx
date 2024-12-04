// import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

export const Header = () => {
  const [tema, setTema] = useState("Light");

  const cambiarTema = () => {
    setTema(tema === "Light" ? "Dark" : "Light");
  };

  useEffect(() => {
    if (tema === "Dark") {
      document.querySelector("html")?.classList.add("dark");
      console.log(document.querySelector('html')?.className)
    } else {
      document.querySelector("html")?.classList.remove("dark");
      console.log(document.querySelector('html')?.className)
    }
  }, [tema]);

  return (
    <header className="w-full h-[80px] flex items-center justify-center  bg-[--white] dark:bg-[--dark-blue] dark:text-white">
      <div className="flex items-center justify-between w-full h-full sm:px-20 px-6 max-w-[1440px]">
        <h1 className="sm:text-2xl text-md font-bold text-nowrap">Where in the world?</h1>
        <button onClick={cambiarTema} className=" flex gap-2 items-center">
          <FontAwesomeIcon icon={tema === "Light" ? faSun : faMoon} />
          <span className="sm:text-[16px] text-xs text-nowrap">{tema} Mode</span>
        </button>
      </div>
    </header>
  );
};
