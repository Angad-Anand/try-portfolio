import React from 'react';
import './ProgressBar.scss'; // Ensure to import your CSS file

const ProgressBar = ({ percentage }) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ '--value': percentage }}
    ></div>
  );
};

export default ProgressBar;
