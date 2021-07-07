import React, { useEffect, useState } from "react";

const ErrorComponent = () => <div>{props.ignore}</div>;

// rewrote Counter to hooks where possible
// const Counter = (props) => {
//   const [count, setCount] = useState(0);
//   const [seed, setSeed] = useState(0);

//   useEffect(() => {
//     console.log("componentDidMount");
//     console.log("---------------------");

//     return (
//       <>
//         console.log("componentWillUnmount");
//         console.log("---------------------");
//       </>
//     );
//   }, []);

//   useEffect(() => {
//     console.log("componentDidUpdate");
//     console.log("---------------------");
//   });

//   const increaseCounter = () => {
//     setCount(count + 1);
//   };
//   try {
//     return (
//       <div className="counter">
//         <button onClick={() => increaseCounter()}>Click Me!</button>
//         <p>Counter: {count}</p>
//         {props.showErrorComponent ? <ErrorComponent /> : null}
//       </div>
//     );
//   } catch (error) {
//     console.log("render", error);
//     return <div>We have encountered an error! {error.message}</div>;
//   }
// };

class Counter extends React.Component {
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
    console.log("getDerivedStateFromProps");
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
      <div className="counter">
        <button onClick={this.increaseCounter}>Click Me!</button>
        <p>Counter: {this.state.count}</p>
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

export default Counter;
