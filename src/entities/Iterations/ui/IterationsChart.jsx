import React, { Component } from "react";
import Chart from "react-apexcharts";

class IterationsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
          name: "Итерация",
          data: [30, 40, 45, 65, 60, 70, 85, 91],
        }
      ],
      stroke: {
        curve: 'smooth',
      }
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="area"
        width="850"
        height='250'
      />
    );
  }
}

export default IterationsChart;
