import React from "react";
import { render } from "react-dom";
import Welcome from "./components/App";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="test">
        <Welcome title="react..." />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
