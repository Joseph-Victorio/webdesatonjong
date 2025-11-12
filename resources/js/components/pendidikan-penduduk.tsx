import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
  ChartDataLabels
);

interface BarChartProps {
  labels: string[];
  values: number[];
}

const PendidikanPenduduk: React.FC<BarChartProps> = ({ labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Jumlah",
        data: values,
        backgroundColor: "#3D7D4B",
      },
    ],
  };

  const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    legend: { display: false },
    datalabels: {
      color: "#000000",
      anchor: "end" as const,
      align: "top" as const,
      font: {
        weight: "bold" as const,
        size: 11, 
      },
      clamp: true,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#374151",
        maxRotation: 45, 
        minRotation: 45,
        font: { size: 11 }
      },
    },
    y: { 
      ticks: { color: "#374151" }, 
      beginAtZero: true 
    },
  },
};

  return <Bar data={data} options={options} />;
};

export default PendidikanPenduduk;
