import React, { useContext } from "react";
import ListItem from "./ListItem";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const List = () => {
  const { products } = useContext(ShoppingListContext);
  return products.length ? (
    <div className="shopping-list">
      <h1>Shopping List:</h1>
      <ul>
        {products.map((product, id) => {
          return <ListItem key={product.id} {...product} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty-list">
      <p>No items in the shopping list!</p>
    </div>
  );
};

export default List;
