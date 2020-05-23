import React, { Component } from "react";
import Todos from "./Components/Todos";
import Navbar from "./Components/layout/Navbar";
import Addtodo from "./Components/Addtodo";
//import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => this.setState({ todos: res.data }));
  }
  // mark coplete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // delete
  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((re) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  // add
  addtodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data],
        })
      );
    // const newTodo = {
    //   id: uuid(),
    //   title,
    //   completed: false,
    // };
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Addtodo addtodo={this.addtodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
