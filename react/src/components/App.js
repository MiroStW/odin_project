import React, { useEffect, useState } from "react";
import Counter from "./Counter";
import Time from "./Time";
import Hooks from "./Hooks";

const App = (props) => {
  return (
    <div className="content">
      <h1>{props.title}</h1>
      <p>
        Please welcome our newest users:{" "}
        {props.userNames.map(
          (userName, i) =>
            userName + (i + 1 !== props.userNames.length ? ", " : "!")
        )}
      </p>
    </div>
  );
};

App.defaultProps = {
  title: "Welcome!",
  userNames: ["Max", "Moritz", "Fritz"],
};

export default App;
