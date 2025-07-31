export const DropDown = ({ options, onSelect, isOpen, isObject }) => {

  const handleOption = (item) => {
    onSelect(isObject ? item : item.label);
    isOpen(false);
  }

  return (
    <ul className="absolute z-10 mt-2 w-44 bg-white text-black dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700 border border-neutral-200 rounded-md shadow-lg">
      {options.map((item, index) => (
        <li key={index} value={item.label} onClick={() => handleOption(item)}
          className="px-4 py-2 hover:bg-blue-200 cursor-pointer"        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
