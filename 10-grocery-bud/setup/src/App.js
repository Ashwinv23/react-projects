import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (value.length > 0) {
        setValue("");
        setItems([
          ...items,
          {
            id: new Date().getTime().toString(),
            item: value,
          },
        ]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
        <label htmlFor="inp"></label>
        <input
          type="text"
          placeholder="Eg. eggs"
          id="inp"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <List value={value} items={items} />
    </main>
  );
}

export default App;
