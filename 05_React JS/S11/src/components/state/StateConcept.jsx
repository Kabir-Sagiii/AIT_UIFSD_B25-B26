import { useState } from "react";

function StateConcept() {
  const [state, setState] = useState("State Concept in React JS : Kabir");
  const [image, setImage] = useState(
    "https://glints.com/id/lowongan/wp-content/uploads/2020/10/logo-reactjs-1024x584.jpg",
  );

  function changeName(name) {
    setState(`Ait provides React JS Training : ${name}`);
    setImage("https://miro.medium.com/max/2400/1*jioilPi2H3wZAxBDgZl_Sg.jpeg");
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <br />
      <img src={image} width={500} height={300} alt="" />
      <br />
      <br />

      {/* <button onClick={changeName}>Update Name</button> */}

      <button
        onClick={() => {
          changeName("Sagar");
        }}
      >
        Update Name
      </button>
    </div>
  );
}

export default StateConcept;
