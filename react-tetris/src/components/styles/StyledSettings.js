import styled from 'styled-components';

export const StyledShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.5;
  display: none;
`
export const StyledSettings = styled.div`
transition: all 0.5s;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;
position: absolute;
width: 25%;
background-color: gray;
height: 100vh;
opacity: 1 !important;

button {
  width: 100%;
  margin: 10px;
  height: 35px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
}

`
export const StyledButtonsHandler = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 75%;
  height: 50%;
  justify-content: center;
`