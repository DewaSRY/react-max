import React from "react";
import ChartBar from "./Chart-bar";
import "./Chart.css";

const Chart = (props) => {
  const datePointValues = props.datePoints.map((datePoint) => datePoint.value);
  const totalMax = Math.max(...datePointValues);
  //   console.log(props.datePoints);
  return (
    <div className="chart">
      {props.datePoints.map((datePoint) => (
        <ChartBar
          key={datePoint.label}
          value={datePoint.value}
          maxValue={totalMax}
          label={datePoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
