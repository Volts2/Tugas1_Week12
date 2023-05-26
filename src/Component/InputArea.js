import React, { useState } from "react";

export default function InputArea({ addItem }) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputText.trim() !== "") {
      addItem(inputText);
      setInputText("");
    }
  }

  return (
    <form className="input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter item"
      />
      <button type="submit">Add</button>
    </form>
  );
}
