// just render our tasks
// use .map to map over task array - provide a unique key to each item

import React from "react";

class DeleteBtn extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <button className="deleteBtn" onClick={() => this.props.deleteTask(task)}>
        delete
      </button>
    );
  }
}

export default DeleteBtn;
