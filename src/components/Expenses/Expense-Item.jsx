import React from "react";

import ExpenseDate from "./Expense-Date";
import Card from "../UI/Card";
import "./Expense-Item.css";

export default function ExpenseItem({ date, title, amount }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
}
