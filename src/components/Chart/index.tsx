import React, { useState, createRef, useEffect } from 'react';
import ChartJS from 'chart.js';
import { Wrapper } from './styles';

const chartConfig = {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
}

type Props = {
  labels: string[],
  data: number[]
}

const Chart: React.FC<Props> = ({ labels, data }) => {
  const [chartRef] = useState(createRef<HTMLCanvasElement>())

  const [chartInstance, setChartInstance] = useState<Chart>()

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const newChartInstance = new ChartJS(chartRef.current, chartConfig);
      setChartInstance(newChartInstance);
    }

  }, [chartRef])

  useEffect(() => {
    if (chartInstance && chartInstance.data.datasets) {
      chartInstance.data.labels = labels
      chartInstance.data.datasets = [{
        label: 'Messages',
        data,
        backgroundColor: 'rgba(138, 228, 237, 0.2)',
        borderColor: 'rgba(138, 228, 237, 1)',
      }]
      console.log(chartInstance.data)
      chartInstance.update();
    }
  }, [labels, data, chartInstance])

  return <Wrapper>
    <canvas ref={chartRef} ></canvas>
  </Wrapper>
}

export default Chart;