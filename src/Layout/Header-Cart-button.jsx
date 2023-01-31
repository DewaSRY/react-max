import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store-contex/Cart-context";
import CartIcon from "../Components/Cart/CartIcon";
import classes from "./Header-cart-button.module.css";

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHigligh, setBtnIsHigligh] = useState(false);
  const cartCTX = useContext(CartContext);
  const { items } = cartCTX;
  const numberOfCartItem = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  //   console.log(cartCTX);
  //   console.log(items);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHigligh(true);
    const timer = setTimeout(() => {
      setBtnIsHigligh(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  //
  const btnClasses = `${classes.button} ${btnIsHigligh ? classes.bump : ""} `;
  return (
    <button onClick={onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderCartButton;
