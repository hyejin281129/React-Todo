import React, { useState } from 'react';
import styled from "./App.module.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1 className={styled.title}>TODO LIST</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..." />
        <button className={styled.btn}>ADD</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>- {item}</li>
      ))}
    </div>
  );
}

export default App;