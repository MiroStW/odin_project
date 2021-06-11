import React from "react";
import Counter from "./Counter";
import Time from "./Time";

export default class App extends React.Component {
  render() {
    return (
      <div className="content">
        <h1>{this.props.title}</h1>
        <p>
          Please welcome our newest users:{" "}
          {this.props.userNames.map(
            (userName, i) =>
              userName + (i + 1 !== this.props.userNames.length ? ", " : "!")
          )}
        </p>
        <Counter />
        <Time />
      </div>
    );
  }
}

App.defaultProps = {
  title: "Welcome!",
  userNames: ["Max", "Moritz", "Fritz"],
};
