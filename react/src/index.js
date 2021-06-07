import React from "react";
import { render } from "react-dom";
import Welcome from "./components/Welcome";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log("btn was clicked!");
  }

  render() {
    return (
      <div className="test">
        <Welcome title="react..." onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
