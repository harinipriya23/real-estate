// initial state for reducer
export const initialState = {
  purpose: "Buy",
  priceRange: { label: "Any price", min: null, max: null },
  location: "",
  propertyType: "",
};

// filter
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SET_PURPOSE":
      return { ...state, purpose: action.payload };
    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: {
          label: action.payload.label,
          min: action.payload.min,
          max: action.payload.max,
        },
      };
    case "LOCATION":
      return { ...state, location: action.payload };
    case "PROPERTY_TYPE":
      return { ...state, propertyType: action.payload };
    case "CLEAR_FILTERS":
      return initialState;
    default:
      return state;
  }
};
