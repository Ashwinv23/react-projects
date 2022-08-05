import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [value, setValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");

  const handleEditSubmit = () => {};

  const handleDel = (id) => {
    const newItems = items.filter((todoItem) => todoItem.id !== id);
    setItems(newItems);
  };

  const handleEdit = (id) => {
    setIsEdit(true);
    const updatedItem = items.find((todoItem) => todoItem.id === id);
    setCurrentItem(updatedItem.item);
    // console.log(updatedItem, value);
    // setItems([...items, { id: updatedItem.id, item: currentItem }]);
    // setIsEdit(false);
  };

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
      {isEdit ? (
        <form onSubmit={handleEditSubmit}>
          <h3>Edit Grocery Bud</h3>
          <label htmlFor="edit"></label>
          <input
            type="text"
            // placeholder="Eg. eggs"
            id="edit"
            value={currentItem}
            onChange={(e) => setCurrentItem(e.target.value)}
          />
          <button>Edit</button>
        </form>
      ) : (
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
      )}

      <List items={items} handleDel={handleDel} handleEdit={handleEdit} />
    </main>
  );
}

export default App;
