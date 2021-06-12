import React from "react";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";

class ShowTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
    };

    this.setEditMode = this.setEditMode.bind(this);
  }

  setEditMode(mode) {
    this.setState(() => ({
      editMode: mode,
    }));
  }

  render() {
    const { task } = this.props;

    if (this.state.editMode === false) {
      return (
        <div key={task.id}>
          {task.order}. {task.title}
          <EditBtn task={task} setEditMode={this.setEditMode} />
          <DeleteBtn task={task} deleteTask={this.props.deleteTask} />
        </div>
      );
    } else {
      return (
        <div key={task.id}>
          <input type="text" id="newTaskTitle" />
          <button
            onClick={() => {
              this.props.editTask(
                task,
                document.querySelector("#newTaskTitle").value
              );
              this.setEditMode(false);
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.setEditMode(false);
            }}
          >
            Cancel
          </button>
        </div>
      );
    }
  }
}

export default ShowTask;
