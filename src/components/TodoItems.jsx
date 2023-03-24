import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/actions";
import compLogo from "../assets/ok.png";
import deleteLogo from "../assets/delete.png";

const TodoItems = ({ complete, text, id }) => {
  const style = {
    textDecoration: complete ? "line-through" : "none",
    backgroundColor: complete ? "#A9A9A9" : "orange",
    borderRadius: "20px",
  };
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <div style={style} className="todoList">
      <h2
        style={{
          width: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {text}
      </h2>
      <div>
        <span>
          <img
            src={compLogo}
            style={{ width: "40px", margin: "10px", cursor: "pointer" }}
            alt="complete logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            style={{ width: "40px", margin: "10px", cursor: "pointer" }}
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItems;
