import React from "react";

import ExpenseItem from "../Expenses-item/Expense.Item";
import classes from "./Expenses.List.module.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className={classes.expensesListFallback}>Found no expenses.</h2>;
  }

  return (
    <ul className={classes.expenseslist}>
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
