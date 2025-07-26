import { usePropertyContext } from "../context/PropertyContext";

export const DropDown = ({ options, dispatchType, isObject }) => {
  
  const { filterDispatch } = usePropertyContext()
  
   return (
    <ul  className="absolute z-10 mt-2 w-44 bg-white border border-neutral-200 rounded-md shadow-lg">
      {options.map((item,index) => (
        <li key={index} value={item.label}
          onClick={() => {        console.log("selected " + item.label) 
            filterDispatch({ type: dispatchType, payload: isObject ? item : item.label })
  }}
                className="px-4 py-2 hover:bg-blue-200 cursor-pointer"
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
