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
      2.25,
      4.7,
      4.2,
      5.39,
      7.83,
      6.73,
      4.45,
    ];

    const highestSalaryPackages = [
      6.5,
      6.0,
      8.0,
      22.0,
      28.0,
      22.0,
      6.0,
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
