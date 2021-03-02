import React, { useState } from 'react';
import { StyledShadow, StyledSettings, StyledButtonsHandler } from './styles/StyledSettings';
import { localDropTime } from '../localStorage'


const Settings = ({ active, setActive, isMusic, setIsMusic, volume, setVolume,
   difficulty, crazyMode, setCrazyMode }) => {

  const activeButton = { 'backgroundColor': '#505050', 'color': 'white' }
  const [currentDroptime, setCurrentDropTime] = useState(localStorage.getItem('DropTime'));

  const musicHandler = () => {
    setIsMusic(!isMusic);
  }

  const difficultyHandler = (dropTime) => {
    setCurrentDropTime(dropTime);
    localDropTime(dropTime);
  };
  const volumeConvert = () => {
    return `${(volume * 100).toFixed(0)}%`
  }
  const volumeHandler = (param) => {
    if (param === '+' && volume < 1) {
      setVolume(volume + 0.1)
    } else if (param === '-' && volume > 0) {
      setVolume(volume - 0.1)
    }
  }

  return (
    <>
      <StyledShadow style={active ? { display: "block" } : { display: "none" }}
        onClick={() => {
          setActive(!active);
        }}>
      </StyledShadow>
      <StyledSettings className='settings' style={active ? { left: 0 } : { left: -8000 }}>
        <StyledButtonsHandler>
          <button className='music-button' onClick={musicHandler}>Music {isMusic ? 'OFF' : 'ON'}</button>
          <div style={{
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
          }}>
            <button onClick={() => volumeHandler('+')}>Volume +</button>
            <span style={{'font-family': 'Pixel, Arial, Helvetica, sans-serif'}}>{volumeConvert()}</span>
            <button onClick={() => volumeHandler('-')}>Volume -</button>
          </div>
          <hr style={{ 'width': '100%' }} />
          <button type='button' className='mode-button' onClick={() => difficultyHandler('100000')} style={
            currentDroptime === '100000' ? activeButton : {}
          } >
            No auto drop
          </button>
          <button className='mode-button' onClick={() => difficultyHandler('1000')} style={
            currentDroptime === '1000' ? activeButton : {}
          }>
            Easy
          </button>
          <button className='mode-button' onClick={() => difficultyHandler('250')} style={
            currentDroptime === '250' ? activeButton : {}
          } >
            Hard
          </button>
          <hr style={{ 'width': '100%' }} />
          <button onClick={() => setCrazyMode(!crazyMode)} style={
            crazyMode ? activeButton : {}
          } >CRAZY MODE</button>
        </StyledButtonsHandler>
      </StyledSettings>
    </>
  )
}
export default Settings;
