const initialState = { status: false };

const Reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "LOGIN_STATUS":
      return {
        status: action.payload,
        state
      };
    default:
      return state;
  }
};
export default Reducer;