import React from 'react';
import styled from 'styled-components';
import './button.css';

export interface IButton {
  label: string;
}

const StyledButton = styled.button`
  color: blue;
`

const Button = ({ label }: IButton) => {
  return <StyledButton>{label}</StyledButton>
}

export default Button;