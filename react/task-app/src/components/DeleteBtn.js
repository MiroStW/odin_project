// just render our tasks
// use .map to map over task array - provide a unique key to each item

import React from "react";

class DeleteBtn extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteTask = () => {
    console.log(this.props.task);
    //TODO figure out how to delete sth from TASKS array here...
  };

  render() {
    return (
      <button className="deleteBtn" onClick={this.deleteTask}>
        delete
      </button>
    );
  }
}

export default DeleteBtn;
