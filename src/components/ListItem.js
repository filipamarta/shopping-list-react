import React, {useContext} from "react";
import { ShoppingListContext } from '../contexts/ShoppingListContext';

const ListItem = ({ name, id }) => {
  //const {removeItem} = useContext(ShoppingListContext);
  const {dispatch} = useContext(ShoppingListContext);
  
  return (
    <li>
      <h3>
        {id} {name}
      </h3>
      {/* <button type="button" onClick={() => {removeItem(id)}}>Delete</button> */}
      <button type="button" onClick={() => dispatch({type:"REMOVE_ITEM", id: id})}>Delete</button>
    </li>
  );
};

export default ListItem;
