import React, { useState } from 'react';

import { createStage } from '../gameHelpres';

import { StyledTetrisWrapper, StyledTetris, StyledAdditionalButtons } from './styles/StyledTetris';

import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';


import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import ScoreButton from './ScoreButton';
import SettingsButton from './SettingsButton';

const Tetris = () => {
  const [droptime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);
  console.log('re-render')

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0})
  }

  const StartGame = () => {
    //Reset ever
    setStage(createStage());
    resetPlayer();

  }

  const drop = () => {
    updatePlayerPos({ x:0, y:1, collided: false})
  }

  const dropPlayer = () => {
    drop();

  }

  const move = ({ keycode }) => {
    if (!gameOver) {
      if (keycode === 37) {
        movePlayer(-1);
      } else if (keycode === 39) {
        movePlayer(1);
      } else if (keycode === 40) {
        dropPlayer();
      }
    }
  }
  return (
    <StyledTetrisWrapper role='button' tabIndex='0' onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text='Game Over' />
          ) : (
              <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
              </div>
            )}
          <StyledAdditionalButtons>
            <ScoreButton />
            <SettingsButton />
          </StyledAdditionalButtons>
          <StartButton callback={StartGame}  />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris;