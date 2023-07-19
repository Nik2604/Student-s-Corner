import React from 'react';
import StackedBarChart from './StackedBarChart'
import LineChart from './LineChart';
import PlacementChart from './PlacementChart'

function Main1() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "50%" }}>
          <StackedBarChart />
        </div>
        <div style={{ width: "50%" }}>
          <PlacementChart />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <LineChart />
      </div>
    </div>
  );
}


export default Main1;
