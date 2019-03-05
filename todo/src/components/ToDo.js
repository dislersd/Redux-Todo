import React from "react";
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  border-bottom: 1px solid black;
  width: 300px;

  h1 {
    cursor: pointer;
  }
`

const ToDo = props => {
  const { task } = props;
  return (
    <Container>
      <h1 onClick={() => props.toggle(props.id)}>{task}</h1>
      {props.completed && "✅"}
      <button onClick={() => props.delete(props.id)}> ❌ </button>
    </Container>
  );
};

export default ToDo;
