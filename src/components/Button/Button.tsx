import React from 'react';

interface Props {
  backgroundColor: string;
  textColor?: string;
  name?: string;
  onClick?: () => void;
}

const Button = ({
  name,
  onClick,
  backgroundColor,
  textColor = 'grey',
}: Props) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: 20,
        padding: '10px 30px',
        width: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {name}
    </div>
  );
};

export default Button;
