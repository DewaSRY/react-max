import React from "react";
import "./Chart.css";

const ChartBar = ({ label, maxValue, max, value }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  //   console.log(value);
  //   console.log(maxValue);
  //   console.log(label);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label} </div>
    </div>
  );
};

export default ChartBar;
