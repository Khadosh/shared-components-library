import React from 'react';
import styled from 'styled-components';
import './button.css';

export interface IButton {
  label: string;
  color: string;
}

const StyledButton = styled.button`
  color: ${ (props)=> props.color || "blue" };
`

const Button = ({ label, color }: IButton) => {
  return <StyledButton color={color}>{label}</StyledButton>
}

export default Button;