const GET_DARK_THEME = "GET_DARK_THEME";
const initialState = localStorage.getItem("theme") === "dark";
const darkThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DARK_THEME:
      return action.payload;
    default:
      return state;
  }
};
export default darkThemeReducer;
