const INITIAL_STATE = {
  counter: 0,
  list: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.payload, complete: false },
        ],
      };

    case "CLEAR_TODO_LIST":
      return INITIAL_STATE;

    case "TOGGLE_TODO":
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        list: state.list.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
