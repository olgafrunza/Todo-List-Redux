import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <div style={{ minWidth: "200px" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add ToDo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: "200px",
              height: "50px",
              fontSize: "1rem",
              paddingLeft: "15px",
              borderRadius: "20px 0 0 20px",
              outline: "none",
            }}
            required
          />
          <button
            type="submit"
            style={{
              height: "50px",
              width: "75px",
              borderRadius: "0 20px 20px 0",
              backgroundColor: "#d44000",
              color: "white",
              fontSize: "1rem",
              outline: "none",
            }}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
