import { useState } from "react";

function Map() {
  const [state, setState] = useState([1, 2, 3, 4]);
  return (
    <div className="container">
      <h1>Rendering Data : {state}</h1>
    </div>
  );
}

export default Map;
