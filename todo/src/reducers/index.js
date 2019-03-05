import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    { task: "clean", id: 1234, completed: false },
    { task: "cook", id: 2345, completed: false }
  ]
};

const reducer = (state = initialState, action) => {
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
     case TOGGLE_TODO:
       return {
         ...state,
         todos: state.todos.map( todo => {
           if (todo.id === action.payload) {
             return {
               ...todo,
               completed: !todo.completed
             }
           }
           return todo
         })
       }
    default:
      return state;
  }
};

export default reducer;
