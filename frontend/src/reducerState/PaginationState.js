export const initialPaginationState = {
    currentPage: 1,
    totalPages: 1
};

export const paginationReducer = (state, action) => {
    switch (action.type) {
        case "SET_CURRENT_PAGE":
            if (action.payload < 1 || action.payload > state.totalPages) return state;
            return {
                ...state,
                currentPage: action.payload
            }
        case "SET_PREVIOUS_PAGE":
            if (state.currentPage <= 1) return state;
            return {
                ...state,
                currentPage: state.currentPage - 1,
            }
        case "SET_NEXT_PAGE":
            if (state.currentPage >= state.totalPages) return state;
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        case "SET_TOTAL_PAGES":
            if (state.totalPages == action.payload) return state;
            return {
                ...state,
                totalPages: action.payload
            }
        case "SET_CURRENT_PAGE_PROPERTY_TYPE":
            if (action.payload < 1 || action.payload > state.totalPages) return state;
            return {
                ...state,
                currentPage: action.payload
            }
        case "SET_TOTAL_PAGES_PROPERTY_TYPE":
            if (state.totalPages == action.payload) return state;
            return {
                ...state,
                totalPages: action.payload
            }
        default: return
            state;
    }
}