import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

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
        todos: [...state.todos, newToDo]
      };
     case TOGGLE_TODO:
       return {
         todos: state.todos.map( todo => {
           if (todo.id === action.payload) {
             return {
               ...todo,
               completed: !todo.completed
             }
           }
           return todo
         })
       };
      case DELETE_TODO:
      return {
        todos: state.todos.filter( todo => todo.id !== action.payload )
      }
    default:
      return state;
  }
};

export default reducer;
