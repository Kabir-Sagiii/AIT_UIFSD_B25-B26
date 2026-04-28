import { useReducer } from "react";

function reducer(state, action) {
  //reducer should contain the logic to update state
  var newState;
  if (action.type === "inc") {
    newState = state + 1;
  } else if (action.type === "dec") {
    newState = state - 1;
  }

  return newState;
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="map">
      <h1>Count Value is : {state}</h1>
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "inc",
          });
        }}
      >
        incCount
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "dec",
          });
        }}
      >
        decCount
      </button>
    </div>
  );
}

export default Counter;
