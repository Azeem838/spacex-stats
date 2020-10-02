import React from 'react';

function Loading() {
  return (
    <div className="spinner-layer spinner-blue">
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
  );
}

export default Loading;
