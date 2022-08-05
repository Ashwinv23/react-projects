import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, handleDel }) => {
  return (
    <div className="list-items">
      {items?.map((item) => (
        <div className="item" key={item.id}>
          <p>{item.item}</p>
          <div className="btn-container">
            <button style={{ marginRight: "1rem", color: "green" }}>
              <FaEdit />
            </button>

            <button style={{ color: "red" }} onClick={() => handleDel(item.id)}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
