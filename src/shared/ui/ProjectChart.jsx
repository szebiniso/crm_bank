import * as React from 'react';
import { Circle } from 'rc-progress';

const Donut = ({percent, iterations, numberOfCompleted}) => {
  const circleContainerStyle = {
    width: '220px',
    height: '220px',
    display: 'inline-block',
    paddingRight: '28px',
  };

  return (
    <div className='relative'>
      {/*<h3>Circle Progress {90}%</h3>*/}
      <div style={circleContainerStyle}>
        <Circle
          percent={percent}
          strokeWidth={6}
          trailWidth={3}
          trailColor='#1f2937'
          strokeLinecap="round"
          strokeColor={{
            '100%': '#008ffb',
            '0%': '#1a4a76',
          }}
        />
      </div>
      <p className='absolute top-20 right-[105px] text-gray-200 font-bold text-3xl'>{numberOfCompleted}/{iterations.length}</p>
    </div>
  );
};

export default Donut;