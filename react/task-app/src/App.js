import React from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        title: "",
        id: uniqid(),
        order: "",
      },
      tasks: [],
    };

    this.handleInput = this.handleInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleInput(e) {
    this.setState({
      task: {
        title: e.target.value,
        id: this.state.task.id,
        order: this.state.tasks.length + 1,
      },
    });
  }

  addTask() {
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(prevState.task),
      task: {
        title: "",
        id: uniqid(),
        order: "",
      },
    }));
    const input = document.querySelector("input");
    input.value = null;
    input.focus();
  }

  deleteTask(task) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((t) => t.id !== task.id),
    }));
  }

  render() {
    return (
      <div className="App">
        <Overview tasks={this.state.tasks} deleteTask={this.deleteTask} />
        <input
          type="text"
          onChange={this.handleInput}
          value={this.state.task.text}
        />
        <button
          onClick={() => {
            this.addTask();
          }}
        >
          Send
        </button>
      </div>
    );
  }
}

export default App;

// handle the input field with the logic
// render an input field and a submit button
// add the content from your input to a “tasks array” that is managed in state
