const FILTER_BY_USER = "FILTER_BY_USER";

const initialState = {
  name: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_USER:
      return;
  }
};

export default userReducer;
