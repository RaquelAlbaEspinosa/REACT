import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment-timezone';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Weather App',
    },
  },
};

export function TableWeather({weather}) {

    const labels = weather.list?.map((day) => {
        return moment(day.dt * 1000).tz("Europe/Madrid").format("dddd")
    });

    const temperature = weather.list?.map((temperature) => {
        return parseInt(temperature.temp.day - 273.15)
    });

    const humidity = weather.list?.map((hum) => {
        return hum.humidity
    });
    
  return <Line options={options} data={ 
    {labels,
    datasets: [
      {
        fill: false,
        label: 'Temperatura',
        data: temperature,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235)',
      },
      {
          label: 'Humedad',
          data: humidity,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132)',
      },
    ]
  }} />;
}