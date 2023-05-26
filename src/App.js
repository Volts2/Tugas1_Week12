import React, { useState } from "react";
import InputArea from "./Component/InputArea";
import ItemList from "./Component/ToDaltem";
import "./styles.css";

export default function Component1() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function deleteItem(index) {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  }

  return (
    <div className="container">
      <p className="header">Task Manager</p>
      <InputArea addItem={addItem} />
      <div className="paper">
        <ItemList items={items} deleteItem={deleteItem} />
      </div>
    </div>
  );
}
