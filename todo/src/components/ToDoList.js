import React from "react";
import { connect } from "react-redux";
//
import ToDo from "./ToDo";

const ToDoList = props => {
  return (
    <>
      {props.todos.map(todo => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(ToDoList);
