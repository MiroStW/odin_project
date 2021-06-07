import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, onButtonClicked } = this.props;
    return (
      <div className="content">
        <h1>{title} - welcome!</h1>
        <button onClick={onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}
