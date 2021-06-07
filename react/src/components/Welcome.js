import React from "react";

export default class App extends React.Component {
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
    console.log(this.state.count);
  }

  render() {
    return (
      <div className="content">
        <h1>{this.props.title} - welcome!</h1>
        <button onClick={this.increaseCounter}>Click Me!</button>
      </div>
    );
  }
}
