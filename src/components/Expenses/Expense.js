import React, { useState } from "react";
import ExpenseItem from "./Expenseitem";
import Card from "../UI/card";
import ExpensesFilter from "./ExpepensesFilter";
import "./Expense.css";

const expenseAllItem = (props) => {
  return props.map((expen) => (
    <div>
      <ExpenseItem
        title={expen.title}
        amount={expen.amount}
        date={expen.date}
      />
    </div>
  ));
};

function Expense(props) {
  const [filterYear, setFilterYeard] = useState("2020");

  const filterDateHeandler = (filterDate) => {
    console.log(filterDate);
    setFilterYeard(filterDate);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onFilterDate={filterDateHeandler} />
      {expenseAllItem(props.items)}
    </Card>
  );
}
export default Expense;
