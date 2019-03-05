import React from "react";
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
  align-items: center;

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
    </Container>
  );
};

export default ToDo;
