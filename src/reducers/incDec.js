const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      if (state > 0) {
        return state - action.payload;
      }
    default:
      return state;
  }
};

export default changeTheNumber;
