import { useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [amoutValue, setAmoutValue] = useState("1");
  const changeHeandler = (event) => {
    const newAmout = event.target.value;
    setAmoutValue(newAmout);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amoutValue;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        name="Amount"
        value={amoutValue}
        onChange={changeHeandler}
        id="amount_"
        type="number"
        min="1"
        max="5"
        step="1"
        // defaultValue="1"
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;