import React from "react";
import ShowTask from "./components/ShowTask";
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
    this.editTask = this.editTask.bind(this);
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
    this.recalcOrder();
  }

  editTask(task, newTaskTitle) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((t) => {
        if (t === task)
          t = {
            title: newTaskTitle,
            id: t.id,
            order: t.order,
          };
        return t;
      }),
    }));
  }

  recalcOrder() {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((t, i) => {
        t = {
          title: t.title,
          id: t.id,
          order: i + 1,
        };
        return t;
      }),
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="tasks">
          {this.state.tasks.map((task, i) => (
            <ShowTask
              key={i}
              task={task}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
            />
          ))}
        </div>

        <input
          type="text"
          onChange={this.handleInput}
          value={this.state.task.title}
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
