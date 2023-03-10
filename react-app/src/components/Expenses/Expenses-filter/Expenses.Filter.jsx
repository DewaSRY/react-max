import React from "react";

import classes from "./Expenses.Filter.module.css";

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const dropdownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className={classes.expensesFilter}>
      <div className={classes.expensesFilterControl}>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
