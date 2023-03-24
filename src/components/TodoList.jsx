import { useSelector, useDispatch } from "react-redux";
import { clearTodoList } from "../redux/actions";
import TodoItems from "./TodoItems";

const TodoList = () => {
  const { list } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  return (
    <div>
      <ul>
        {list.map((todo) => {
          return <TodoItems key={todo.id} {...todo} />;
        })}
      </ul>
      <button
        style={{
          height: "50px",
          width: "100px",
          borderRadius: "10px",
          marginTop: "25px",
          backgroundColor: "#d44000",
          color: "white",
          fontSize: "1rem",
          outline: "none",
        }}
        onClick={handleClearList}
      >
        Clear
      </button>
    </div>
  );
};

export default TodoList;
