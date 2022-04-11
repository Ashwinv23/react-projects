import React from "react";

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.img} alt={item.title} />
      <div>
        <article>
          <h3>{item.title}</h3>
          <span>{item.price}</span>
        </article>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default Item;
