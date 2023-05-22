import React from "react";
import Chart from "react-apexcharts";

const IterationsChart = ({iterations}) => {

  const state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: iterations.map(iteration => iteration.name)
      },
      markers: {
        size: 3,
        strokeColors: 'lightblue',
      },
      dataLabels: {
        enabled: false
      },
    },
    series: [
      {
        name: "Количество выполнных целей",
        data: [30, 40, 45, 65, 60],
      }
    ],
    stroke: {
      curve: 'smooth',
    }
};

    return (
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="850"
        height='250'
      />
    );
  }

export default IterationsChart;
