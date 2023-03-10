import React, { useState } from "react";

import FormInput from "../../UI/Form-input/Form.input";
import classes from "./Expense.Form.module.css";

const INITIAL_STATE = {
  title: "",
  amount: "",
  date: "",
};

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredInput, setEnteredInput] = useState(INITIAL_STATE);
  const { title, amount, date } = enteredInput;

  const onChangeHeandler = (event) => {
    const { name, value } = event.target;
    setEnteredInput({ ...enteredInput, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    onSaveExpenseData(expenseData);
    setEnteredInput(INITIAL_STATE);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.newExpenseControls}>
        <FormInput
          title={"Title"}
          name="title"
          type="text"
          value={title}
          onChange={onChangeHeandler}
        />
        <FormInput
          title={"Date"}
          name="date"
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={date}
          onChange={onChangeHeandler}
        />
        <FormInput
          title={"Amount"}
          name="amount"
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={onChangeHeandler}
        />
      </div>
      <div className={classes.newExpenseActions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
