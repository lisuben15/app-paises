import { useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  onChange: (value: string) => void;
  selectedValue: string;
}

export const Desplegable: React.FC<DropdownProps> = ({
  options = [],
  onChange,
  selectedValue,
}) => {
  useEffect(() => {}, [selectedValue]);

  return (
    <select
      onChange={(e) => {
        onChange(e.target.value);
      }}
      className="sm:w-[200px] w-[264px] h-[50px] pl-6 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-[--dark-blue] dark:text-white "
      value={selectedValue}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
