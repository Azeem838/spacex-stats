import React from 'react';

function Loading() {
  return (
    <div className="preloader-wrapper big active preloader">
      <div className="spinner-layer spinner-red">
        <div className="circle-clipper left">
          <div className="circle" />
        </div>
        <div className="gap-patch">
          <div className="circle" />
        </div>
        <div className="circle-clipper right">
          <div className="circle" />
        </div>
      </div>
    </div>
  );
}

export default Loading;
