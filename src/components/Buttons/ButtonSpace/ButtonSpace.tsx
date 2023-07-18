import React from 'react';
import './ButtonSpace.css';

interface Props {
  name: string;
  click: () => void;
}

const ButtonSpace: React.FC<Props> = ({name, click}) => {
  return (
    <>
      <button onClick={click} className="btn" type="button">
        <strong>{name}</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>

    </>
  );
};

export default ButtonSpace;