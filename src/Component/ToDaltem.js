import React from "react";

export default function ItemList({ items, deleteItem }) {
  function handleItemClick(index) {
    deleteItem(index);
  }

  return (
    <ul onClick={(e) => handleItemClick(e.target.dataset.index)}>
      {items.map((item, index) => (
        <li key={index} data-index={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
