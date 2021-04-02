const ALL_DATA = "ALL_DATA";

const initialState = "";

const allExporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DATA:
      // const testHappy = [...state, action.payload];
      // return testHappy;
      return action.payload;
    default:
      return state;
  }
};

export default allExporterReducer;
