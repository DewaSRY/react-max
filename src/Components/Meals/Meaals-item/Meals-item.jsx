import { useContext } from "react";
import { CartContext } from "../../../store-contex/Cart-context";
import classes from "./Meals-item.module.css";
import MealItemForm from "./Meal-Item-form";

const MealItem = (props) => {
  const price = `$${props.price}`;
  const cartCTX = useContext(CartContext);
  const addToCartHeandler = (amount) => {
    cartCTX.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <dir>
        <MealItemForm onAddToCart={addToCartHeandler} />
      </dir>
    </li>
  );
};

export default MealItem;
