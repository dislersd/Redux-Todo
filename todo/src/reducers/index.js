const initialState = {
  title: 'ToDo',
  todos: [
    {task: 'clean', id: 1234, completed: false},
    {task: 'cook', id: 2345, completed: false}
  ]
}


const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;