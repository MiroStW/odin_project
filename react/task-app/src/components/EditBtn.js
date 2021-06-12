// just render our tasks
// use .map to map over task array - provide a unique key to each item

import React from "react";

class EditBtn extends React.Component {
  render() {
    return (
      <button className="EditBtn" onClick={() => this.props.setEditMode(true)}>
        edit
      </button>
    );
  }
}

export default EditBtn;
