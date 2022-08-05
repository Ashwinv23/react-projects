import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [value, setValue] = useState("");

  return (
    <main>
      <form>
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
      <List />
    </main>
  );
}

export default App;
