import React, { useState, useEffect } from "react";
import items from "./data";
import Item from "./Item";

function App() {
  const [food, setFood] = useState([]);

  useEffect(() => {
    setFood(items);
  }, []);

  return (
    <main>
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <div className="btn-section">
        <button onClick={() => setFood(items)}>All</button>
        <button
          onClick={() =>
            setFood(items.filter((item) => item.category === "breakfast"))
          }
        >
          Breakfast
        </button>
        <button
          onClick={() =>
            setFood(items.filter((item) => item.category === "lunch"))
          }
        >
          Lunch
        </button>
        <button
          onClick={() =>
            setFood(items.filter((item) => item.category === "shakes"))
          }
        >
          Shakes
        </button>
      </div>
      <section>
        {food.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}

export default App;
