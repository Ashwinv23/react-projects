import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  return (
    <main>
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <div className="btn-section">
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Shakes</button>
      </div>
      <section>
        <Menu />
      </section>
    </main>
  );
}

export default App;
