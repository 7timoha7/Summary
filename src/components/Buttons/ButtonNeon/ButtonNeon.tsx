import React from 'react';
import './ButtonNeon.css'

interface Props {
  click: () => void;
  buttonName: string;
}

const ButtonNeon: React.FC<Props> = ({click, buttonName}) => {
  return (
    <>
      <button onClick={click} className={'buttonNeon'}> {buttonName}
      </button>
    </>
  );
};

export default ButtonNeon;