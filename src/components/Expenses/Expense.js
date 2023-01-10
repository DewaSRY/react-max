import React, { useState } from "react";
import ExpenseItem from "./Expenseitem";
import Card from "../UI/card";
import ExpensesFilter from "./ExpepensesFilter";
import "./Expense.css";

function Expense(props) {
  const [filterYear, setFilterYeard] = useState("2020");

  const filterDateHeandler = (filterDate) => {
    console.log(filterDate);
    setFilterYeard(filterDate);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterDate={filterDateHeandler} />
      {props.items.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </Card>
  );
}
export default Expense;
