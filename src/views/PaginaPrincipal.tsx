import { useEffect, useState } from "react";
import { Desplegable } from "../componentes/Desplegable";
import { Catalogo } from "../componentes/Catalogo";
// import { DetalleCard } from "../componentes/DetalleCard";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PaginaPrincipal = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [textoABuscar, setTextoABuscar] = useState("");
  // const [continente, setContinente] = useState("");

  useEffect(() => {
    const continente = localStorage.getItem("continenteSeleccionado");

    setSelectedOption(continente!);
  }, []);

  const handleSelection = (value: string) => {
    localStorage.setItem("continenteSeleccionado", value);
    setSelectedOption(value);
  };

  const options = [
    { value: "All", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
    { value: "Polar", label: "Polar" },
    { value: "Antarctic", label: "Antarctic" },
  ];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && textoABuscar.trim()) {
      setTextoABuscar(textoABuscar);
    }
  };

  return (
    <main className="min-h-screen w-full max-w-[1440px] flex flex-col gap-12 py-10 sm:px-20 px-6 mx-auto outline-none bg-[--very-light-gray] dark:bg-[--very-dark-blue-dark-mode-bg] dark:text-white">
      {
        <>
          <div className="flex sm:justify-between items-center sm:flex-row flex-col pt-2 gap-6">
            <div className="flex gap-6 items-center w-full sm:w-[480px] h-[50px] pl-6 rounded-md bg-[--white] dark:bg-[--dark-blue] dark:text-white">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                type="text"
                value={textoABuscar}
                onChange={(e) => setTextoABuscar(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full text-md py-2 pl-2 outline-none dark:bg-[--dark-blue] dark:text-white"
                placeholder="Search for a country"
              />
            </div>
            <Desplegable
              options={options}
              onChange={handleSelection}
              selectedValue={selectedOption}
            />
          </div>
          <Catalogo selectedRegion={selectedOption} texto={textoABuscar} />
        </>
      }
    </main>
  );
};
