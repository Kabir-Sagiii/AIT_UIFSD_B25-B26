// import { useState } from "react";

// function Map() {
//   const [state, setState] = useState([
//     <p>p1</p>,
//     <div>D1</div>,
//     <p>P2</p>,
//     <h3>h3</h3>,
//   ]);
//   return (
//     <div className="container">
//       <h1>Rendering Data : {state}</h1>
//     </div>
//   );
// }

// export default Map;

import { useState } from "react";

function Map() {
  var [state, setState] = useState([
    "Kunal",
    "Rakesh",
    "Amit",
    "Vishal",
    "Shubham",
    "Aditya",
    "Akash",
    "raj",
    "rohan",
    "jiya",
  ]);
  return (
    <div className="container">
      <h1>Map Concept in React JS</h1>
      <ol>
        {state.map(function (element) {
          return <li>{element}</li>;
        })}
      </ol>
    </div>
  );
}

export default Map;
