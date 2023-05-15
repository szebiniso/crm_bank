import React from 'react';
import {Circle} from "rc-progress";

const CircleProgressBar = ({percent, }) => {
  return (
    <div className='w-6 h-6 mx-0.5 inline-block'>
      <Circle percent={percent} strokeWidth={10} strokeLinecap="round" strokeColor='#1f99f5' />
    </div>
  );
};

export default CircleProgressBar;
