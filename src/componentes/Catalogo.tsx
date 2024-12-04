import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Country } from "../models/country";

interface CatalogoProps {
  selectedRegion: string | null;
  texto: string | null;
}

export const Catalogo: React.FC<CatalogoProps> = ({
  selectedRegion,
  texto,
}) => {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [filteredCountries, setFilteredCountries] = useState<Array<Country>>(
    []
  );

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedRegion) {
      const filtered = countries.filter(
        (country) => country.region === selectedRegion
      );

      if (filtered.length < 1) {
        setFilteredCountries(countries);
      } else {
        setFilteredCountries(filtered);
      }
    } else {
      setFilteredCountries(countries); // Si no hay filtro, muestra todos
    }
  }, [countries, selectedRegion]);

  useEffect(() => {
    if (texto && texto != "") {
      const paisFiltrado = countries.filter((country) =>
        country.name.toLowerCase().includes(texto.toLowerCase())
      );
      setFilteredCountries(paisFiltrado);
    } else {
      setFilteredCountries(countries); // Si no hay filtro, muestra todos
    }
  }, [texto]);

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
    <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-8 place-items-center justify-between">
      {filteredCountries.map((country, index) => (
        <Card key={index} country={country} />
      ))}
    </div>
  );
};
