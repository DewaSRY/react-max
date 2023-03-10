import React, { useState } from "react";

import ExpenseForm from "../Expenses-form/Expense.Form";
import classes from "./New.Expense.module.css";

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };
  const onEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className={classes.newExpense}>
      {!isEditing && (
        <button onClick={onEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={onEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
