import React from "react";

const ErrorComponent = () => <div>{props.ignore}</div>;

class Lifecycle extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      count: 0,
      seed: 0,
    };

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      console.log("getDerivedStateFromProps - new seed");
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("---------------------");
  }

  increaseCounter() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("shouldComponentUpdate - do NOT render");
      return false;
    }

    console.log("shouldComponentUpdate - do render");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  render() {
    console.log("render", this.state.error);
    if (this.props.showErrorComponent && this.state.error) {
      return (
        <div>We have encountered an error! {this.state.error.message}</div>
      );
    }
    return (
      <div className="lifecycle">
        <p>This is all going very well</p>
        {this.props.showErrorComponent ? <ErrorComponent /> : null}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("---------------------");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log("---------------------");
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch");
    this.setState({ error, info });
  }
}

export default Lifecycle;
