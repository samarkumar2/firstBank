import "./BarChart.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Sun",
    Deposit: 4000,
    Withdrawal: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    Deposit: 3000,
    Withdrawal: 1398,
    amt: 2210,
  },
  {
    name: "Tue",
    Deposit: 2000,
    Withdrawal: 9800,
    amt: 2290,
  },
  {
    name: "Wed",
    Deposit: 2780,
    Withdrawal: 3908,
    amt: 2000,
  },
  {
    name: "Thru",
    Deposit: 1890,
    Withdrawal: 4800,
    amt: 2181,
  },
  {
    name: "Fri",
    Deposit: 2390,
    Withdrawal: 3800,
    amt: 2500,
  },
  {
    name: "sat",
    Deposit: 3490,
    Withdrawal: 4300,
    amt: 2100,
  },
];

export default function BarCharts() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Deposit" fill="#8884d8" />
          <Bar dataKey="Withdrawal" fill="#82ca9d" />
        </BarChart>
      </CardContent>
    </Card>
  );
}
