// ./components/LineChart.js

import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./LineChart.css";

const LineChart = () => {
  const [values, setValues] = useState([]);

  const generateValue = () => {
    var list = [];
    for (let i = 50; i < 100; i++) {
      var p = Math.floor(Math.random() * 10);

      list = [...list, p];
    }
    setValues(list);
  };

  useEffect(() => {
    generateValue();
  }, []);

  const labels = [
    "January",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "February",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "April",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(37, 101, 217)",
        data: values,
      },
    ],
  };

  return (
    <div className="graph">
      <Line
        data={data}
        id="line"
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
            },
            legend: {
              labels: {
                filter: (legendItem, data) =>
                  typeof legendItem.text !== "undefined",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
