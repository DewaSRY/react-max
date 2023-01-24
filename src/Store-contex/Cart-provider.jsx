//
import { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existiongcartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exixtingCartItem = state.items[existiongcartItemIndex];
    //
    let updateItems;
    if (exixtingCartItem) {
      const updateItem = {
        ...exixtingCartItem,
        amount: exixtingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existiongcartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existiongcartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exitingItem = state.items[existiongcartItemIndex];
    const updateTotalAmount = state.totalAmount - exitingItem.price;
    let updateItems;
    if (exitingItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = { ...exitingItem, amount: exitingItem.amount - 1 };
      updateItems = [...state.items];
      updateItems[existiongcartItemIndex] = updateItem;
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};
//
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemcartHeandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemFormCartHeandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContextObject = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemcartHeandler,
    removeItem: removeItemFormCartHeandler,
  };
  return (
    <CartContext.Provider value={cartContextObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
