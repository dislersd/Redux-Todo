import React from "react";

const ToDo = props => {
  const { todo } = props;
  return (
    <>
      <h1>{todo.task}</h1>
    </>
  );
};

export default ToDo;
