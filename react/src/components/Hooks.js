import React, { useState, useEffect, Component } from "react";

// export default class Hooks extends Component {
//   render() {
//     return <div>"test"</div>;
//   }
// }

const Hooks = () => {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColor = () => {
      color === "black" ? setColor("red") : setColor("black");
    };

    document
      .querySelector("#myDiv")
      .addEventListener("click", () => changeColor());

    return () => {
      document
        .querySelector("#myDiv")
        .removeEventListener("click", () => changeColor());
    };
  }, [color]);

  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          left: "50%",
          top: "50%",
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
};

export default Hooks;
