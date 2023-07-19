import React from "react";
import { Chart } from "react-google-charts";

const PlacementChart = () => {
  const data = [
    ["Branch", "Placed Candidates"],
    ["CIVIL", 110],
    ["EEE", 84],
    ["ME", 117],
    ["ECE", 103],
    ["CSE", 186],
    ["IT", 35],
    ["ECM", 25]
  ];

  const options = {
    title: "Placement Statistics by Branch",
    is3D: true,
    tooltip: {
      trigger: "hover",
      text: (tooltipItem) => {
        const branch = data[tooltipItem.row + 1][0];
        const placedCandidates = data[tooltipItem.row + 1][1];
        const highestPackage = getHighestPackage(branch);
        return `${branch}\nPlaced Candidates: ${placedCandidates}\nHighest Package: ${highestPackage}`;
      },
    },
  };

  const getHighestPackage = branch => {
    switch (branch) {
      case "CIVIL":
        return "6.5 LPA";
      case "EEE":
        return "6.0 LPA";
      case "ME":
        return "8.0 LPA";
      case "ECE":
        return "22.0 LPA";
      case "CSE":
        return "28.0 LPA";
      case "IT":
        return "22.0 LPA";
      case "ECM":
        return "6.0 LPA";
      default:
        return "0 LPA";
    }
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default PlacementChart;
