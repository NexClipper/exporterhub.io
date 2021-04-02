const MORE_DATA = "MORE_DATA";

const initialState = [];

const moreExporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case MORE_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default moreExporterReducer;
