const ALL_DATA = "ALL_DATA";

const initialState = "";

const allExporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default allExporterReducer;
