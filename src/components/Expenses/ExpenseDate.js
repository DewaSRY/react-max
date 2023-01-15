import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date_mont">{month}</div>
      <div className="expense-date_yeaar">{year}</div>
      <div className="expense-date_day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
