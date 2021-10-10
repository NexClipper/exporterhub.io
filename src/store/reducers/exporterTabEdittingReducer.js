const EDITTING_EXPORTER_TAB_CONTENT = "EDITTING_EXPORTER_TAB_CONTENT";
const EDITTING_EXPORTER_TAB_FILENAME = "EDITTING_EXPORTER_TAB_FILENAME";
const EDITTING_EXPORTER_TAB_DESCRIPTION = "EDITTING_EXPORTER_TAB_DESCRIPTION";
const EDITTING_EXPORTER_TAB_VERSION = "EDITTING_EXPORTER_TAB_VERSION";

const initialState = {
  fileName: "",
  description: "",
  content: "",
  version: "",
};

const exporterTabEdittingReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDITTING_EXPORTER_TAB_CONTENT:
      return (state = {
        ...state,
        content: action.payload,
      });
    case EDITTING_EXPORTER_TAB_FILENAME:
      return (state = {
        ...state,
        fileName: action.payload,
      });
    case EDITTING_EXPORTER_TAB_DESCRIPTION:
      return (state = {
        ...state,
        description: action.payload,
      });
    case EDITTING_EXPORTER_TAB_VERSION:
      return (state = {
        ...state,
        version: action.payload,
      });
    default:
      return state;
  }
};

export default exporterTabEdittingReducer;
