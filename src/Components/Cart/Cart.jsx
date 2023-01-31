import { useContext } from "react";
import { CartContext } from "../../store-contex/Cart-context";
import CartItem from "./Cart-item/Cart-item";
import classes from "./Cart.module.css";
import Modal from "../../Ui/Modal";

const Cart = ({ onCartHeandler }) => {
  const cartCTX = useContext(CartContext);

  const totalAmount = `$${cartCTX.totalAmount.toFixed(2)}`;
  const hasItems = cartCTX.items.length > 0;

  const cartItemRemoveHeandler = (id) => {
    cartCTX.removeItem(id);
  };

  const cartItemAddHeandler = (item) => {
    cartCTX.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCTX.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHeandler.bind(null, item.id)}
          onAdd={cartItemAddHeandler.bind(null, item)}
        />
      ))}{" "}
    </ul>
  );
  return (
    <Modal onClick={onCartHeandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={onCartHeandler} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
