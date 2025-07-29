import { usePropertyContext } from "../context/PropertyContext";

export const DropDown = ({ options, onSelect,isOpen, isObject }) => {
  const { filterDispatch } = usePropertyContext();

    return (
    <ul className="absolute z-10 mt-2 w-44 bg-white border border-neutral-200 rounded-md shadow-lg">
      {options.map((item, index) => (
        <li
          key={index}
          value={item.label}
          onClick={() => {
            onSelect(isObject ? item : item.label);
            isOpen(false);
          }}
          className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
