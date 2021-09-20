const BEFORE_EDIT_EXPORTER_TAB = "BEFORE_EDIT_EXPORTER_TAB";

const initialState = {};

const exporterTabBeforeEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case BEFORE_EDIT_EXPORTER_TAB:
      return action.payload;
    default:
      return state;
  }
};

export default exporterTabBeforeEditReducer;
