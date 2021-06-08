import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increaseCounter}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
