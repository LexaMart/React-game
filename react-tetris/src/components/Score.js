import React from 'react';

import { StyledShadow, StyledScore} from './styles/StyledSettings';
import { StyledScoreUl, StyledScoreLi, StyledScoreActive } from './styles/StyledScore'

const Score = ({ active, setActive }) => {

  const getScoreArray = () => {
    if (!localStorage.getItem('ScoreArray') || localStorage.getItem('ScoreArray').length === 0) {
      return [{score:'No score', rows: 'No rows'}]
    } else return JSON.parse(localStorage.getItem("ScoreArray"))
  }

  return (
    <>
    <StyledShadow style={active ? { display: "block" } : { display: "none" }}
        onClick={() => {
          setActive(!active);
        }}>
      </StyledShadow>
      <StyledScoreActive style={active ? { left: 0 } : { left: -8000 }}>
          <StyledScoreUl>
          {
            getScoreArray().map((el, i) => <StyledScoreLi key={i}>Player: score: {el.score} ; rows: {el.rows} </StyledScoreLi>)   
          }

          </StyledScoreUl>
      </StyledScoreActive>
    </>
  )
}

export default Score;
