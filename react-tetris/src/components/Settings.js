import React, { useState } from 'react';
import { StyledShadow, StyledSettings, StyledButtonsHandler } from './styles/StyledSettings';
import { localDropTime } from '../localStorage'


const Settings = ({ active, setActive, isMusic, setIsMusic, difficulty }) => {

  const activeButton = {'background-color': '#505050', 'color': 'white'}
  const[currentDroptime, setCurrentDropTime] = useState(localStorage.getItem('DropTime'));

  const musicHandler = () => {
    setIsMusic(!isMusic);
  }

  const difficultyHandler = (dropTime) => {
    setCurrentDropTime(dropTime);
    localDropTime(dropTime);
  };

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
        </StyledButtonsHandler>
      </StyledSettings>
    </>
  )
}
export default Settings;
