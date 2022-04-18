import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newInput = event.target.value;
    setNewItem(newInput);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((entry) => (
            <li>{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
