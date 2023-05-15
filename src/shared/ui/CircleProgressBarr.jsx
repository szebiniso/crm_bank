import * as React from 'react';
import { Circle } from 'rc-progress';

class CircleProgressBarr extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      percent: 17,
      color: '#3FC7FA',
    };
    this.changeState = this.changeState.bind(this);
    this.changeIncrease = this.changeIncrease.bind(this);
    this.changeReduce = this.changeReduce.bind(this);
  }

  changeState() {
    const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A'];
    const value = parseInt((Math.random() * 100).toString(), 10);
    this.setState({
      percent: value,
      color: colorMap[parseInt((Math.random() * 3).toString(), 10)],
    });
  };

  changeIncrease() {
    this.setState(({ percent }) => {
      if (percent > 100) {
        percent = 100;
      }
      return {
        percent: percent + 1,
      };
    });
  };

  changeReduce() {
    this.setState(({ percent }) => {
      if (percent < 0) {
        percent = 0;
      }
      return {
        percent: percent - 1,
      };
    });
  };

  render() {
    const { percent, color } = this.state;
    const containerStyle = {
      width: '25px',
    };
    const circleContainerStyle = {
      width: '25px',
      height: '25px',
      display: 'inline-block',
    };
    return (
      <div>
        <div style={circleContainerStyle}>
          <Circle percent='13' strokeWidth={10} strokeLinecap="round" strokeColor='#3FC7FA' />
        </div>
        {/*<p>*/}
        {/*  <button type="button" onClick={this.changeState}>*/}
        {/*    Change State*/}
        {/*  </button>*/}
        {/*  <button type="button" onClick={this.changeIncrease}>*/}
        {/*    Increase*/}
        {/*  </button>*/}
        {/*  <button type="button" onClick={this.changeReduce}>*/}
        {/*    Reduce*/}
        {/*  </button>*/}
        {/*</p>*/}
      </div>
    );
  }
}

export default CircleProgressBarr;