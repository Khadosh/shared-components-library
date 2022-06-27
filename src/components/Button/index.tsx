import React from 'react';

interface IButton {
  label: string;
}

const Button = ({ label }: IButton) => {
  return <button>{label}</button>
}

export default Button;