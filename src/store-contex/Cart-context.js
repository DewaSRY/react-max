import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  // ADD_ITEM
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updateItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  //   REMOVE_ITEM
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispactCartState] = useReducer(
    CartReducer,
    defaultCartState
  );

  const addItemToCartHeandler = (item) => {
    dispactCartState({ type: "ADD_ITEM", item: item });
  };
  const removeItemFromCartHeandler = (id) => {
    dispactCartState({ type: "REMOVE_ITEM", id: id });
  };

  const CartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHeandler,
    removeItem: removeItemFromCartHeandler,
  };
  return (
    <CartContext.Provider value={CartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
