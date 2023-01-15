import React from "react";
import Chart from "../chard/chart";

const ExpensesChart = (props) => {
  const chartDatePoints = [
    {
      label: "jan",
      value: 0,
    },
    {
      label: "feb",
      value: 0,
    },
    {
      label: "mar",
      value: 0,
    },
    {
      label: "apr",
      value: 0,
    },
    {
      label: "may",
      value: 0,
    },
    {
      label: "jun",
      value: 0,
    },
    {
      label: "jul",
      value: 0,
    },
    {
      label: "aug",
      value: 0,
    },
    {
      label: "sep",
      value: 0,
    },
    {
      label: "oct",
      value: 0,
    },
    {
      label: "novan",
      value: 0,
    },
    {
      label: "des",
      value: 0,
    },
  ];
  for (const expense of props.expenses) {
    const expensesMounth = expense.date.getMonth();
    chartDatePoints[expensesMounth].value += expense.amount;
  }
  return <Chart datePoints={chartDatePoints} />;
};

export default ExpensesChart;
