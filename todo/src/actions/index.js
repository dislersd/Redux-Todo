export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';


export const addToDo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export const toggleToDo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  }
}

export const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}