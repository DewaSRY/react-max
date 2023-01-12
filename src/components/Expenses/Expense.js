import React, { useState } from "react";
import ExpenseItem from "./Expenseitem";
import Card from "../UI/card";
import ExpensesFilter from "./ExpepensesFilter";
import "./Expense.css";

function Expense({ items }) {
  const [filterYear, setFilterYeard] = useState("");

  const filterDateHeandler = (filterDate) => {
    console.log(filterDate);
    setFilterYeard(filterDate);
  };

  console.log(items);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterDate={filterDateHeandler} />
      {items.map((expenses) => (
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
