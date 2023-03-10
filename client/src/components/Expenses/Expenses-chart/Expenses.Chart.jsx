import React from "react";

import { chartDataPoints } from "../../../assets/CHART_DATA_POINT";
import Chart from "../../Chart/Chart/Chart";

const ExpensesChart = ({ expenses }) => {
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
