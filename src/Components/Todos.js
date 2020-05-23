import React, { Component } from "react";
import TodoItems from "./TodoItems";
import PropsTypes from "prop-types";

export default class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItems
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// propsTypes
Todos.propsTypes = {
  todo: PropsTypes.array.isRequred,
  markComplete: PropsTypes.func.isRequred,
  delTodo: PropsTypes.func.isRequred,
};
