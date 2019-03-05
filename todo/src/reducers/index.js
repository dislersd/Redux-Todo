import { ADD_TODO } from "../actions";

const initialState = {
  todos: [
    { task: "clean", id: 1234, completed: false },
    { task: "cook", id: 2345, completed: false }
  ]
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      const newToDo = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newToDo]
      };
    default:
      return state;
  }
};

export default reducer;
