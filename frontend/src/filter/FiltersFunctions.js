// inital state for reducer
export const initalState = {
  purpose: "Buy",
  priceRange: { label: "Any price", min: null, max: null },
  location: "",
};

// filter
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_PURPOSE":
      return { ...state, purpose: action.payload };
    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
      };
    case "LOCATION":
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
