import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { branch: 'CIVIL', placed: 110, unplaced: 34 },
  { branch: 'EEE', placed:84, unplaced: 89 },
  { branch: 'ME', placed: 117, unplaced: 110 },
  { branch: 'ECE', placed: 103, unplaced: 94 },
  { branch: 'CSE', placed: 186, unplaced: 78 },
  { branch: 'IT', placed: 46, unplaced: 26 },
  { branch: 'ECM', placed: 25, unplaced: 19 },
];

const StackedBarChart = () => {
  return (
    <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="branch" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="placed" stackId="a" fill="#8884d8" />
      <Bar dataKey="unplaced" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
};

export default StackedBarChart;
