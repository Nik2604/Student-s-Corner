import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-line",
      },
      xaxis: {
        categories: [
          "CIVIL",
          "EEE",
          "ME",
          "ECE",
          "CSE",
          "IT",
          "ECM",
        ],
      },
      yaxis: {
        title: {
          text: "Salary Package (in LPA)",
        },
      },
    },
    series: [],
  });

  useEffect(() => {
    const averageSalaryPackages = [
      3.91,
      4.59,
      4.4,
      4.56,
      6.66,
      5.6,
      4.63,
    ];

    const highestSalaryPackages = [
      4.8,
      7,
      10,
      8,
      27,
      20,
      11,
    ];

    setChartData({
      options: chartData.options,
      series: [
        {
          name: "Average Salary Package",
          data: averageSalaryPackages,
        },
        {
          name: "Highest Salary Package",
          data: highestSalaryPackages,
        },
      ],
    });
  }, []);

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
