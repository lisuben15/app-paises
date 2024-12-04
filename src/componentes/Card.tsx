import { Link } from "react-router-dom";
import { Country } from "../models/country";

type Props = {
  country: Country;
};

export const Card = ({ country }: Props) => {
  return (
    <Link
      to={`/PaginaDetalle/${country.name}`}
      className="shadow-lg"
      preventScrollReset={false}
    >
      <div className="flex flex-col w-[264px] h-[335px] bg-[--white] dark:bg-[--dark-blue] dark:text-white rounded-md overflow-hidden">
        <div className="flex w-full h-[160px]">
          <img
            className="w-full h-full object-cover rounded-t-md"
            src={country.flags.png}
            alt={country.name}
          />
        </div>

        <div className="flex flex-1 items-start text-left flex-col gap-3 px-6 pt-6 bg-[--White]">
          <h2 className="font-bold text-lg">{country.name}</h2>
          <div className="flex flex-col items-start text-left   gap-1">
            <p className="text-sm">
              <strong>Population:</strong> {country.population}
            </p>
            <p className="text-sm">
              <strong>Region:</strong> {country.region}
            </p>
            <p className="text-sm">
              <strong>Capital:</strong> {country.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
