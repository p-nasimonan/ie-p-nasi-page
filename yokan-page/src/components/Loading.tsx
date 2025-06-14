import React from 'react';

interface LoadingProps {
  hideLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ hideLoading }) => {
  return (
    <div className={`loading ${hideLoading ? 'hide' : ''}`}>
      <div id="scene">
        <div className="boxBase">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="front"></div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="boxBase">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="front"></div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <div className="boxBase">
          <div className="top"></div>
          <div className="bottom"></div>
          <div className="front"></div>
          <div className="back"></div>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 