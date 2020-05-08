import React, { createContext, useReducer, useEffect } from "react";
import { shoppingListReducer } from "../reducers/shoppingListReducer";

export const ShoppingListContext = createContext();

const ShoppingListContextProvider = (props) => {
  const [products, dispatch] = useReducer(shoppingListReducer, [], () => {
    const localData = localStorage.getItem("products");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <ShoppingListContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ShoppingListContext.Provider>
  );

  /*  
    // all the code without Reducers and LocalStorage:

    const [products, setProducts] = useState([
        { name: "orange", id: 1 },
        { name: "apple", id: 2 },
        { name: "bananas", id: 3 },
        { name: "peaches", id: 4 },
        { name: "avocados", id: 5 },
    ]); 

    const addItem = (name) => {
        console.log("Add", name);
        setProducts([...products, { name: name, id: products.length + 1 }]);
    };

    const removeItem = (id) => {
        console.log("remove", id);
        setProducts(products.filter((product) => product.id !== id));
    }; 

    return (
        <ShoppingListContext.Provider value={{ products, addItem, removeItem }}>
        {props.children}
        </ShoppingListContext.Provider>
    ); 
    */
};

export default ShoppingListContextProvider;
