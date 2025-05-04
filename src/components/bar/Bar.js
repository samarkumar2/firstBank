import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const data = {
    labels: ['August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Monthly Expenditure',
        data: [3000, 5000, 5000, 10000, 12500],
        backgroundColor: [
          'rgba(128, 128, 128, 0.6)',
          'rgba(128, 128, 128, 0.6)',
          'rgba(128, 128, 128, 0.6)',
          'rgba(128, 128, 128, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(128, 128, 128, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarGraph;
