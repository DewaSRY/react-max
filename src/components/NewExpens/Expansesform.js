import React, { useState } from "react";

import "./ExpanseForm.css";

const Expanse_form_default = {
  title: "",
  amount: "",
  date: "",
};

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState(Expanse_form_default);
  const { title, amount, date } = userInput;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput({ ...userInput, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const FormData = userInput;

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSvaeExpenseData(expenseData);
    setUserInput(Expanse_form_default);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <label>Title</label>
          <input
            value={title}
            name="title"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input
            value={amount}
            name="amount"
            onChange={handleChange}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input
            value={date}
            name="date"
            onChange={handleChange}
            type="date"
            min="2019-01-01"
            max="2024-12-31"
          />
        </div>
        <div className="new-expense__actions ">
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
