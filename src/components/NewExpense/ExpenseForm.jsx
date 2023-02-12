import React, { useState } from "react";
import FormInput from "../UI/Input-form";
import Button from "../UI/Button";
import "./ExpenseForm.css";
const FIELD_DEFAULT = {
  title: "",
  amount: "",
  date: "",
};

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [enteredField, setEnteredField] = useState(FIELD_DEFAULT);
  const { title, amount, date } = enteredField;

  const enteredFieldHeandeld = (event) => {
    const { name, value } = event.target;
    setEnteredField({ ...enteredField, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    onSaveExpenseData(expenseData);
    setEnteredField(FIELD_DEFAULT);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <FormInput
          label="Title"
          type="text"
          value={title}
          onChange={enteredFieldHeandeld}
          name="title"
        />
        <FormInput
          label="Amount"
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={enteredFieldHeandeld}
          name="amount"
        />
        <FormInput
          label="Date"
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={date}
          onChange={enteredFieldHeandeld}
          name="date"
        />
      </div>
      <div className="new-expense__actions">
        <Button type="button" onClick={onCancel} value=" Cancel" />

        <Button type="submit" value="Add Expense" />
      </div>
    </form>
  );
};

export default ExpenseForm;
