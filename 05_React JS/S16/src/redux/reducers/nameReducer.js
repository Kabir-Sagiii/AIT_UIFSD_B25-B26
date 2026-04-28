const nameReducer = (state, action) => {
  var newState;
  if (action.type === "name") {
    newState = action.payload;
  }

  return newState;
};

export default nameReducer;
