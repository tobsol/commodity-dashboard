import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const Chart = ({ labels, data }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Commodity Price',
        data: data,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.3,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Chart;
