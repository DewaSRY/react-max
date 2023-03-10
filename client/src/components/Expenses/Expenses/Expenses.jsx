import React, { useState } from "react";

import Card from "../../UI/Card";
import ExpensesFilter from "../Expenses-filter/Expenses.Filter";
import ExpensesList from "../Expenses-List/Expenses.List";
import ExpensesChart from "../Expenses-chart/Expenses.Chart";
import classes from "./Expenses.module.css";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className={classes.expenses}>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
