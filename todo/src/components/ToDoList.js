import React from "react";
import { connect } from "react-redux";
//
import ToDo from "./ToDo";
import { toggleToDo } from "../actions";

class ToDoList extends React.Component {
  toggle = id => {
    this.props.toggleToDo(id);
  };

  render() {
    return (
      <>
        {this.props.todos.map(todo => (
          <ToDo 
          key={todo.id}
          {...todo}
          toggle={this.toggle}
          />
          
        ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleToDo }
)(ToDoList);
