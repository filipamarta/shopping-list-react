import React, { useState, useContext } from "react";
import { ShoppingListContext } from "../contexts/ShoppingListContext";

const AddItemInput = () => {
  //const { addItem } = useContext(ShoppingListContext);
  const { dispatch } = useContext(ShoppingListContext);
  const [newProduct, setNewProduct] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handle submit");
    //addItem(newProduct);
    dispatch({type: "ADD_ITEM", product: {name: newProduct}});
    setNewProduct("");

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newProduct}
          name="add-item"
          onChange={(event) => setNewProduct(event.target.value)}
        />
        <button type="submit">Add new product</button>
      </form>
    </div>
  );
};

export default AddItemInput;
