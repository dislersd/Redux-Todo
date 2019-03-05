import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToDo, toggleToDo } from "../actions";

class ToDoForm extends React.Component {
  state = {
    todo: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addToDo = e => {
    e.preventDefault();
    this.props.addToDo(this.state.todo);
    this.setState({ todo: "" });
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChange}
          placeholder="add a new todo..."
        />
        <button onClick={this.addToDo}> ➕ </button>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     todo: state.todos
//   };
// };

function mapDispatch(dispatch) {
  return bindActionCreators({ addToDo, toggleToDo }, dispatch);
}

export default connect(
  null,
  mapDispatch
)(ToDoForm);
