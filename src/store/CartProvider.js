import { useReducer } from "react";
import CartContext from "./cart-context";
import { ACTION_TYPE } from "./cart-type";
export const createAction = (type, payload) => ({ type, payload });

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  if (type === ACTION_TYPE.ADD) {
    const exitingItems1 = state.items.find((item) => item.id === payload.id);
    console.log(exitingItems1);
    const updatedTotalAmount =
      state.totalAmount + payload.price * payload.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === payload.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(payload);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (type === ACTION_TYPE.REMOVE) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === payload
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== payload);
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

const CartProvider = (props) => {
  const [{ items, totalAmount }, dispatch] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (productToadd) => {
    dispatch(createAction(ACTION_TYPE.ADD, productToadd));
  };
  const removeItemFromCartHandler = (productToRemove) => {
    dispatch(createAction(ACTION_TYPE.REMOVE, productToRemove));
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
