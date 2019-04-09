import React from "react";
//
import "./css/App.css";
//
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";


const App = () => {
  return (
    <div className="App">
      <ToDoForm />
      <ToDoList />
    </div>
  );
};

export default App;