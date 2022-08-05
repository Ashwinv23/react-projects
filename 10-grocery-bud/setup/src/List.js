import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ value, items }) => {
  return (
    <div className="list-items">
      {items?.map((item) => (
        <div className="item">
          <p key={item.id}>{item.item}</p>
          <div className="btn-container">
            <button style={{ marginRight: "1rem", color: "green" }}>
              <FaEdit />
            </button>

            <button style={{ color: "red" }}>
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
