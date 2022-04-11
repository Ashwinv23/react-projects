import React from "react";
import Item from "./Item";

const Menu = ({ food }) => {
  return (
    <>
      {food.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </>
  );
};

export default Menu;
