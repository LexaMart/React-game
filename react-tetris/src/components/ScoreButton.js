import React from 'react';
import { StyledScoreButton } from './styles/StyledScoreButton'


const ScoreButton = ({callback}) => (
  <StyledScoreButton type='button' onClick={callback} >
    SCORE
  </StyledScoreButton>
);

export default ScoreButton;