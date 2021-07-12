import React from "react";

const ErrorComponent = () => <div>{props.ignore}</div>;

class Lifecycle extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);

    this.state = {
      mount: true,
      ignoreProp: false,
      count: 0,
      seed: 0,
      showErrorComponent: false,
    };

    this.ramdomizeIgnoreProp = this.ramdomizeIgnoreProp.bind(this);
    this.seedGenerator = this.seedGenerator.bind(this);
    this.toggleError = this.toggleError.bind(this);
  }

  ramdomizeIgnoreProp() {
    this.setState({ ignoreProp: Math.random() });
  }

  seedGenerator() {
    this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }

  toggleError() {
    this.setState({ showErrorComponent: !this.state.showErrorComponent });
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

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.ignoreProp &&
      this.state.ignoreProp !== nextState.ignoreProp
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
    if (this.state.showErrorComponent && this.state.error) {
      return (
        <div>We have encountered an error! {this.state.error.message}</div>
      );
    }
    return (
      <>
        <button
          onClick={() => this.setState({ mount: true })}
          disabled={this.state.mount}
        >
          Mount component
        </button>
        <button
          onClick={() => this.setState({ mount: false })}
          disabled={!this.state.mount}
        >
          Unmount component
        </button>
        <button onClick={() => this.ramdomizeIgnoreProp()}>Ignore Prop</button>
        <button onClick={() => this.seedGenerator()}>Generate Seed</button>
        <button onClick={() => this.toggleError()}>Toggle Error</button>
        {this.state.mount && (
          <div className="lifecycle">
            <p>This is all going very well</p>
            {this.state.showErrorComponent ? <ErrorComponent /> : null}
          </div>
        )}
      </>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log(`showErrorComponent: ${this.state.showErrorComponent}`);
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
