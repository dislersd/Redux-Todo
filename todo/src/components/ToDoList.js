import React from "react";
import ToDo from "./ToDo";
import { connect } from "react-redux";

const ToDoList = props => {
  return (
    <>
      {props.todos.map(todo => (
        <ToDo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    test: state.test,
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(ToDoList);
