import React, { useState } from "react";
import ListItem from "./ListItem";

const itemList = [];

function App() {
  const [newItem, setNewItem] = useState("");

  function handleChange(event) {
    const newInput = event.target.value;
    setNewItem(newInput);
  }

  function addItem() {
    itemList.push(newItem);
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
          {itemList.map((entry) => (
            <ListItem key={entry} item={entry} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
