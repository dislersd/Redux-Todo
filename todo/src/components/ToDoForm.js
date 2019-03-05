import React from "react";

class ToDoForm extends React.Component {
  state = {
    task: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input 
        type="text"
        name="task"
        value={this.state.value}
        onChange={this.handleChange}  
        />
        <button> + </button>
      </div>
    );
  }
}

export default ToDoForm;
