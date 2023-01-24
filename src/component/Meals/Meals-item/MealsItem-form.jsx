//
import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealtItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHeandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredamountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredamountNumber < 1 ||
      enteredamountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredamountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHeandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
