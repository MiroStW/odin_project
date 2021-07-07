import React, { useState } from "react";
import Counter from "./Counter";
import Time from "./Time";
import Hooks from "./Hooks";

const App = (props) => {
  const [mount, setMount] = useState(true);
  const [ignoreProp, setIgnoreProp] = useState(0);
  const [seed, setSeed] = useState(40);
  const [showErrorComponent, setShowErrorComponent] = useState(false);

  const ramdomizeIgnoreProp = () => setIgnoreProp(Math.random());
  const seedGenerator = () => setSeed(Number.parseInt(Math.random() * 100));
  const toggleError = () => setShowErrorComponent(!showErrorComponent);

  return (
    <div className="content">
      <h1>{props.title}</h1>
      <p>
        Please welcome our newest users:{" "}
        {props.userNames.map(
          (userName, i) =>
            userName + (i + 1 !== props.userNames.length ? ", " : "!")
        )}
      </p>
      <div>
        <button onClick={() => setMount(true)} disabled={mount}>
          Mount Counter
        </button>
        <button onClick={() => setMount(false)} disabled={!mount}>
          Unmount Counter
        </button>
        <button onClick={() => ramdomizeIgnoreProp()}>Ignore Prop</button>
        <button onClick={() => seedGenerator()}>Generate Seed</button>
        <button onClick={() => toggleError()}>Toggle Error</button>
      </div>
      {mount ? (
        <Counter
          ignoreProp={ignoreProp}
          seed={seed}
          showErrorComponent={showErrorComponent}
        />
      ) : null}
      <Time />
      <Hooks />
    </div>
  );
};

App.defaultProps = {
  title: "Welcome!",
  userNames: ["Max", "Moritz", "Fritz"],
};

export default App;
