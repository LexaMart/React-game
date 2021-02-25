import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';
import { localDropTime } from '../localStorage';
import { StyledTetrisWrapper, StyledTetris, StyledAdditionalButtons } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import ScoreButton from './ScoreButton';
import SettingsButton from './SettingsButton';
import Settings from './Settings';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );
  const [activeSettings, setActiveSettings] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isMusic, setIsMusic] = useState(true);


  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(localDropTime() / (level + 1));
      }
    }
  };

  const showSettings = () => {
    setActiveSettings(!activeSettings);
  }

  const startGame = () => {
    setStage(createStage());
    setDropTime(localDropTime());
    setIsStarted(true);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(localDropTime() / (level + 1) + 200);
      console.log(dropTime);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <Settings active={activeSettings} setActive={setActiveSettings} isMusic={isMusic} setIsMusic={setIsMusic} difficulty={localDropTime()} />
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
              <div>
                <Display text={`Score: ${score}`} />
                <Display text={`rows: ${rows}`} />
                <Display text={`Level: ${level}`} />
              </div>
            )}
          <StyledAdditionalButtons>
            <ScoreButton />
            <SettingsButton callback={showSettings} />
          </StyledAdditionalButtons>

          <StartButton callback={startGame} gameStarted={isStarted} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
