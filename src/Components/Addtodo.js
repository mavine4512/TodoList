import React, { Component } from "react";
import PropsTypes from "prop-types";

export default class Addtodo extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({ title: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addtodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Add to do..."
            style={{ flex: "10", padding: "5px" }}
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            name="submit"
            style={{ flex: "1" }}
            className="btn"
          />
        </form>
      </div>
    );
  }
}

// propsTypes
Addtodo.propsTypes = {
  addtodo: PropsTypes.func.isRequred,
};
