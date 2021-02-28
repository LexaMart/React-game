import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`
:hover {
    opacity: 0.7
  }
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

const StartButton = ({ callback, gameStarted }) => (
  <StyledStartButton onClick={callback}>{gameStarted ? 'RESTART' : 'START'}</StyledStartButton>
);

export default StartButton;
