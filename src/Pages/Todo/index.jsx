import { useState, useRef } from "react";
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  const handleAdd = (event) => {
    const task = inputRef.current.value;
    event.preventDefault();
    setTodos((prev) => [
      ...prev,
      { id: window.crypto.randomUUID(), title: task },
    ]);
    event.target.reset();
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "40px",
      }}
    >
      <form style={{ display: "flex" }} onSubmit={handleAdd}>
        <input ref={inputRef} />
        <button type="submit" style={{ marginLeft: "20px" }}>
          Add
        </button>
      </form>
      {todos.length > 0 && (
        <ul>
          {todos.map((item, index) => (
            <li style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {item.title}
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{ height: "20px", width: "40px", marginLeft: "40px" }}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
