export const shoppingListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { name: action.product.name, id: state.length + 1 }];
    case "REMOVE_ITEM":
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
};
