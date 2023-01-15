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
  const FilterExpenses = items.filter((item) => {
    return item.date.toLocaleString().includes(filterYear);
  });
  const expenses = FilterExpenses.map((expenses) => {
    return (
      <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
      />
    );
  });
  const checkExpenseFalue = FilterExpenses.length === 0 ? <h1>hallo</h1>  :expenses ;

  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterDate={filterDateHeandler} />
      {checkExpenseFalue}
    </Card>
  );
}
export default Expense;
