import React from 'react';

import { createStage } from '../gameHelpres';
import {StyledTetrisWrapper, StyledTetris, StyledAdditionalButtons} from './styles/StyledTetris';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import ScoreButton from './ScoreButton';
import SettingsButton from './SettingsButton';

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
      <Stage stage= {createStage()} />
      <aside>
        <div>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
        </div>
        <StyledAdditionalButtons>
        <ScoreButton />
        <SettingsButton />
        </StyledAdditionalButtons>
        <StartButton />
      </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;