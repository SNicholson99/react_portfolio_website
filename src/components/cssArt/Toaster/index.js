import React from 'react';

import './Toaster.css';

const Toaster = (props) => {
  return (
    <div className="toaster-container">
      <div className="toaster-main" />
      <div className="toaster-dial">
        <div className="toaster-dial-marking" />
      </div>
      <div className="toaster-lever" />
      <div className="toaster-handle" />
      <div className="toaster-toast-1" />
      <div className="toaster-toast-2" />
    </div>
  )
}

export default Toaster;
