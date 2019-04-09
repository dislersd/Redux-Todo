import React from "react";
import { connect } from "react-redux";
//
import ToDo from "./ToDo";
import { toggleToDo, deleteToDo } from "../actions";

class ToDoList extends React.Component {

  toggle = id => {
    this.props.toggleToDo(id);
  };

  delete = id => {
    this.props.deleteToDo(id)
  }

  render() {
    return (
      <>
        {this.props.todos.map(todo => (
          <ToDo 
          key={todo.id}
          {...todo}
          toggle={this.toggle}
          delete={this.delete}
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
  { toggleToDo, deleteToDo }
)(ToDoList);
