import React from "react";

import classes from "./Expense.Date.module.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className={classes.expenseDate}>
      <div className={classes.expenseDateMonth}>{month}</div>
      <div className={classes.expenseDateYear}>{year}</div>
      <div className={classes.expenseDateDay}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
