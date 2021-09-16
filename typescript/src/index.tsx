import React from "react";
import ReactDOM from "react-dom";

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("Brendan", new Date());

const App = () => {
  return (
    <div>
      <p>Hello World!</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
