import React from "react";

import ExpenseItem from "./Expense-Item";
import "./Expenses-List.css";

export default function ExpensesList({ items }) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </ul>
  );
}
