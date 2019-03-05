import React from "react";

class ToDoForm extends React.Component {
  state = {
    todo: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='form'>
        <input 
        type="text"
        name="todo"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder='add a new todo...'  
        />
        <button> + </button>
      </div>
    );
  }
}

export default ToDoForm;
