export const DropDown = ({ labels, handleSelect }) => {
  return (
    <ul className="absolute z-10 mt-2 w-44 bg-white border border-neutral-200 rounded-md shadow-lg">
      {labels.map((item) => (
        <li
          onClick={() => handleSelect(item.label)}
          className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
