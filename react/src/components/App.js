import React from "react";
import Counter from "./Counter";
import Time from "./Time";

export default class App extends React.Component {
  render() {
    return (
      <div className="content">
        <h1>{this.props.title} - welcome!</h1>
        <Counter />
        <Time />
      </div>
    );
  }
}
