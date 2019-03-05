import React from "react";

const ToDo = props => {
  const { task } = props;
  return (
    <>
      <h1>{task}</h1>
    </>
  );
};

export default ToDo;
