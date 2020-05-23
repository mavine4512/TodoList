import React, { Component } from "react";
import PropsTypes from "prop-types";

export default class TodoItems extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "5px",
      borderBottom: "#ccc 1px dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  color: "#fff",
  background: "#ff0000",
  float: "right",
  padding: "5px 9px",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
};

// propsTypes
TodoItems.propsTypes = {
  todos: PropsTypes.array.isRequred,
  markComplete: PropsTypes.func.isRequred,
  delTodo: PropsTypes.func.isRequred,
};
