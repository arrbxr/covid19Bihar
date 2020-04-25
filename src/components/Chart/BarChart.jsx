import React from "react";
import { Bar } from "react-chartjs-2";
import style from "./BarChart.module.css";

const BarChart = ({ data: { confirm, active, deaths, recovered } }) => {
  console.log(confirm);

  const data = {
    labels: ["Confirmed", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        fillColor: ["red", "blue", "orange", "red"],
        backgroundColor: ["#ff073a", "#007bff", "#28a745", "#6c757d"],
        borderColor: "rgba(0,0,0, 1)",
        data: [confirm, active, recovered, deaths],
      },
    ],
  };

  return (
    <div className="conatiner my-5">
      <div className={style.container}>
        <Bar
          data={data}
          options={{
            title: {
              display: true,
              text: "Current status in Bihar",
              fontSize: 20,
            },
            legend: {
              display: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default BarChart;
