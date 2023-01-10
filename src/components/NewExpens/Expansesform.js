import React, { useState } from "react";

import "./ExpanseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHeandler = (event) => {
    setenteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     title: event.target.value,
    //   };
    // });
  };
  const amountChangeHeandler = (event) => {
    setenteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     amount: +event.target.value,
    //   };
    // });
  };
  const dateChangeHeandler = (event) => {
    setenteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     date: new Date(event.target.value),
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // const FormData = userInput;
    // props.onSvaeExpenseData(FormData);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      data: new Date(enteredDate).toLocaleString(),
    };
    props.onSvaeExpenseData(expenseData);
    setenteredTitle("");
    setenteredDate(" ");
    setenteredAmount("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control ">
          <label>Title</label>
          <input
            value={enteredTitle}
            onChange={titleChangeHeandler}
            type="text"
          />
        </div>
        <div className="new-expense__control ">
          <label>Amount</label>
          <input
            value={enteredAmount}
            onChange={amountChangeHeandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control ">
          <label>Date</label>
          <input
            value={enteredDate}
            onChange={dateChangeHeandler}
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
