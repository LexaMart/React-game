import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';
import { localDropTime, localScore } from '../localStorage';
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
import Score from './Score';
import FullScreen from './FullScreen';
import Footer from './Footer';

//Audio
import gameOverSound from '../sounds/game-over.mp3';
import moveSound from '../sounds/move.mp3';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [isMusic, setIsMusic] = useState(true);
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer, isMusic);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );
  const [activeSettings, setActiveSettings] = useState(false);
  const [activeScore, setActiveScore] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [crazyMode, setCrazyMode] = useState(false);
  const [fullscr, setFullscr] = useState(false);
  const [volume, setVolume] = useState(1);



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
  const showScore = () => {
    setActiveScore(!activeScore);
  }

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
    createStage();
  };

  const playSound = (soundPath) => {
    if (isMusic && isStarted) {
      const audio = new Audio(soundPath);
      audio.volume = volume;
      audio.play();
    }
  }


  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(localDropTime() / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        if (rows !== 0) {
          localScore(score, rows);
        }
        console.log('GAME OVER!!!');
        playSound(gameOverSound)
        console.log(typeof (score));
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
      if (!crazyMode) {
        playSound(moveSound);
        if (keyCode === 37) {
          movePlayer(-1);
        } else if (keyCode === 39) {
          movePlayer(1);
        } else if (keyCode === 40) {
          dropPlayer();
        } else if (keyCode === 38) {
          playerRotate(stage, 1);
        }
      } else {
        playSound(moveSound);
        if (keyCode === 37) {
          movePlayer(1);
        } else if (keyCode === 39) {
          movePlayer(-1);
        } else if (keyCode === 40) {
          dropPlayer();
        } else if (keyCode === 38) {
          playerRotate(stage, 1);
        }
      }
    }
  };
  const openFull = () => {
    if (!fullscr) {
      document.querySelector('.fullscr').requestFullscreen();
    }
  }

  return (
    <>
      <StyledTetrisWrapper
        role="button"
        tabIndex="0"
        onKeyDown={e => move(e)}
        onKeyUp={keyUp}
      >
        <Settings active={activeSettings} setActive={setActiveSettings} isMusic={isMusic} setIsMusic={setIsMusic} difficulty={localDropTime()}
          volume={volume} setVolume={setVolume}
        crazyMode={crazyMode} setCrazyMode={setCrazyMode} />
      <Score active={activeScore} setActive={setActiveScore} />
        <StyledTetris className='fullscr'>
          <Stage stage={stage} />
          <aside>
            <FullScreen callback={openFull} />
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
              <ScoreButton callback={showScore} />
              <SettingsButton callback={showSettings} />
            </StyledAdditionalButtons>

            <StartButton callback={startGame} gameStarted={isStarted} />
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
      <Footer />
    </>
  );
};

export default Tetris;
