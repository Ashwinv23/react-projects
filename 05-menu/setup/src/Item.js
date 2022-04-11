import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt={item.title} />
      <div>
        <header>
          <h3>{item.title}</h3>
          <span>{item.price}</span>
        </header>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default Item;
