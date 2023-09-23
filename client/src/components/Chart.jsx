import React from "react";
import Chart from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

const ChartBar = () => {
  const state = {
    labels: ["PRIA", "WANITA", "TOTAL"],
    datasets: [
      {
        label: "",
        data: [500, 1000, 1500, 400, 500, 2000, 2500],
        backgroundColor: [
          "rgba(223, 0, 0, 0.8)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 216, 8, 0.8)",
        ],
        barPercentage: 0.9,
        maxBarThickness: 50,
        categoryPercentage: 0.2,
      },
    ],
  };
  return (
    <div>
      <Bar  data={state} />
    </div>
  );
};

export default ChartBar;
