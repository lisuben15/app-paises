import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft as solidArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Country } from "../models/country";

type Props = {
  nombrePais: string;
};

export const DetalleCard = ({ nombrePais }: Props) => {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [pais, setPais] = useState<Country>();

  const navigate = useNavigate();
  const volver = () => {
    navigate("/");
  };

  useEffect(() => {
    if (nombrePais) {
      const objPais = countries.find((country) => country.name === nombrePais);
      setPais(objPais);
    } else {
      setCountries(countries);
    }
  }, [nombrePais, countries]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = () => {
    fetch("/data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      });
  };

  return (
    <div className="min-h-screen w-full  max-w-[1440px] flex flex-col gap-12 py-20 sm:px-20 px-6 mx-auto bg-[--very-light-gray] dark:bg-[--very-dark-blue-dark-mode-bg] dark:text-white">
      <div className="flex flex-col gap-20 dark:bg-[--very-dark-blue-dark-mode-bg] dark:text-white">
        <button
          onClick={volver}
          className="flex w-[137px] items-center  justify-center  gap-3 rounded-md border-gray py-2 dark:bg-[--dark-blue] dark:text-white"
        >
          <FontAwesomeIcon icon={solidArrowLeft} /> Back
        </button>
        <div className="flex  lg:flex-row flex-col lg:h-[400px] lg:w-full">
          <div className="flex-1">
            <img
              src={pais?.flags.png}
              alt={pais?.name}
              className="w-full h-full xl:pr-20 object-fill"             
            />
          </div>
          <div className="flex-1 pt-10 flex flex-col gap-8">
            <h1 className="text-3xl font-[900] lg:pl-16">{pais?.name}</h1>
            <div className="flex lg:flex-row  gap-6  flex-col justify-between">
              <div className=" flex flex-col gap-1">
                <span className="lg:pl-16">
                  Native Name:{" "}
                  <span className="opacity-[0.6]">{pais?.nativeName}</span>
                </span>
                <span className="lg:pl-16">
                  Population:{" "}
                  <span className="opacity-[0.6]">{pais?.population}</span>{" "}
                </span>
                <span className="lg:pl-16">
                  Region: <span className="opacity-[0.6]"> {pais?.region}</span>
                </span>
                <span className="lg:pl-16">
                  Sub Region:{" "}
                  <span className="opacity-[0.6]">{pais?.subregion}</span>{" "}
                </span>
                <span className="lg:pl-16">
                  Capital:{" "}
                  <span className="opacity-[0.6]">{pais?.capital}</span>{" "}
                </span>
              </div>
              <div className=" flex flex-col gap-1 ">
                <span className="">
                  Top Level Domain:{" "}
                  <span className="opacity-[0.6]">{pais?.topLevelDomain}</span>{" "}
                </span>
                <span className="">
                  Currencies:{" "}
                  <span className="opacity-[0.6]">
                    {pais?.currencies ? pais.currencies[0]?.name : "-"}
                  </span>{" "}
                </span>
                <span className="">
                  Languages:{" "}
                  <span className="opacity-[0.6]">
                    {pais?.languages[0].name}, {pais?.languages?.[1]?.name},{" "}
                    {pais?.languages?.[2]?.name}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex w-full lg:flex-row flex-col pt-10 gap-2 items-start flex-nowrap">
              <span className="mr-2 whitespace-nowrap lg:pl-16">
                Border Countries:
              </span>
              <div className="flex gap-3 flex-wrap items-center ">
                {Array.isArray(pais?.borders) && pais.borders.length > 0 ? (
                  pais.borders.map((border, index) => (
                    <span
                      key={index}
                      className="px-6 rounded-sm dark:bg-[--dark-blue] dark:text-white opacity-[0.6] text-md"
                    >
                      {border}
                    </span>
                  ))
                ) : (
                  <span className="dark:text-white">
                    It has no border countries
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
