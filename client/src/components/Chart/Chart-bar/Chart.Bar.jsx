import React from "react";
import classes from "./Chart.Bar.module.css";

const ChartBar = ({ maxValue, value, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className={classes.chartBar}>
      <div className={classes.chartBarInner}>
        <div
          className={classes.chartBarFill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={classes.chartBarLabel}>{label}</div>
    </div>
  );
};

export default ChartBar;
