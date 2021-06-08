import React from "react";

export default class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString(),
    };

    this.setTimer = this.setTimer.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setTimer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  setTimer() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return (
      <div className="time">
        <p>It is {this.state.time}</p>
      </div>
    );
  }
}
