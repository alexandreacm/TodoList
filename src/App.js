import "./App.css";
import React, { useState, useReducer } from "react";

const initialState = {
  todo: [],
  loading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "add-todo":
      return {
        todo: [
          ...state.todo,
          {
            id: action.payload.id,
            text: action.payload.text,
          },
        ],
      };
    default:
      return state;
  }
}

function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [{ todo }, dispatch] = useReducer(reducer, initialState);

  function onHandleAddTodo() {
    let myTodo = {
      id: Math.floor(Math.random() * 10),
      text,
    };

    if (text === "") {
      alert("Is required");
      return;
    }

    dispatch({ type: "add-todo", payload: myTodo });
    //setText([...list, myTodo]);
    setText("");
  }

  return (
    <div className="App">
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="Typing something..."
            style={{
              width: 300,
              height: 30,
              borderRadius: 12,
              marginBottom: 8,
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <button
            type="button"
            style={{
              width: 100,
              height: 40,
              background: "#6A5ACD",
              color: "#FFF",
              borderRadius: 10,
            }}
            onClick={onHandleAddTodo}
          >
            Add Todo
          </button>

          <p>
            <table style={{ width: "100%" }}>
              {todo.map((item) => {
                return (
                  <tr style={{ background: "#6495ED" }} key={item.id}>
                    <td>{item.text}</td>
                  </tr>
                );
              })}
            </table>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
