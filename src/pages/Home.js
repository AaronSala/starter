import { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1 className="header">My Colors</h1>
      <h2>my first color is {color}</h2>
      <button
        onClick={() => {
          setColor("green");
          document.body.style.backgroundColor = "green";
        }}
      >
        green
      </button>

      <button
        onClick={() => {
          setColor("pink");
          document.body.style.backgroundColor = "pink";
        }}
      >
        pink
      </button>

      <button
        onClick={() => {
          setColor("black");
          document.body.style.backgroundColor = "black";
        }}
      >
        balck
      </button>
    </>
  );
};

export default Home;
