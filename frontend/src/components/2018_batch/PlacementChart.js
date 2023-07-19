import React from "react";
import { Chart } from "react-google-charts";

const PlacementChart = () => {
  const data = [
    ["Branch", "Placed Candidates"],
    ["CIVIL", 90],
    ["EEE", 125],
    ["ME", 191],
    ["ECE", 146],
    ["CSE", 206],
    ["IT", 45],
    ["ECM", 43]
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
        return "4.8 LPA";
      case "EEE":
        return "7 LPA";
      case "ME":
        return "10 LPA";
      case "ECE":
        return "8 LPA";
      case "CSE":
        return "27 LPA";
      case "IT":
        return "20 LPA";
      case "ECM":
        return "11 LPA";
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
