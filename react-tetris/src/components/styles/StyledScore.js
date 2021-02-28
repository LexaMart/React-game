import styled from 'styled-components';

export const StyledScoreUl = styled.ul`
list-style:decimal;
padding: 0;
`
export const StyledScoreLi = styled.li`
padding-bottom: 10px;
font-size: 20px;
font-family: Pixel, Arial, Helvetica, sans-serif;
`
export const StyledScoreActive = styled.div`
transition: all 0.5s;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-start;
position: absolute;
width: 50%;
background-color: gray;
height: 100vh;
opacity: 1 !important;
`