import React from "react";
import "./App.css";
import List from "./components/List";
import AddItemInput from "./components/AddItemInput";
import ShoppingListProvider from "./contexts/ShoppingListContext";



function App() {
  return (
    <div className="App">
      <ShoppingListProvider>
        <AddItemInput />
        <List />
      </ShoppingListProvider>
    </div>
  );
}

export default App;
