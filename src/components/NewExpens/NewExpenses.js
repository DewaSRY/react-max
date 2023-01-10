import React from "react";

import ExpenseForm from "./Expansesform";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const svaeExpenseDataHendler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpennse(expenseData);
  };
  return (
    <div className="new-expense ">
      <ExpenseForm onSvaeExpenseData={svaeExpenseDataHendler} />
    </div>
  );
};

export default NewExpenses;
