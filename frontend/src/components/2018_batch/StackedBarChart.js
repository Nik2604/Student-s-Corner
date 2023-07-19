import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { branch: 'CIVIL', placed: 90, unplaced: 53 },
  { branch: 'EEE', placed:125, unplaced: 36 },
  { branch: 'ME', placed: 191, unplaced: 61 },
  { branch: 'ECE', placed: 146, unplaced: 29 },
  { branch: 'CSE', placed: 206, unplaced: 26 },
  { branch: 'IT', placed: 45, unplaced: 13 },
  { branch: 'ECM', placed: 43, unplaced: 5 },
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
