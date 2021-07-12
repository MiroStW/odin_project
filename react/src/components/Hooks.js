import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    console.log(color);
  }, [color]);

  useEffect(() => {
    const changeColor = () => {
      setColor((lastColor) =>
        lastColor === "black" ? setColor("red") : setColor("black")
      );
    };

    document
      .querySelector("#myDiv")
      .addEventListener("click", () => changeColor());

    return document
      .querySelector("#myDiv")
      .removeEventListener("click", () => changeColor());
  }, []);

  return (
    <>
      <div
        id="myDiv"
        style={{
          color: "white",
          ["place-self"]: "center",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </>
  );
};

export default Hooks;
