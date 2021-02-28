import styled from 'styled-components';
import bgImage from '../../img/back.jpg';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 95vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  outline: none;
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;
export const StyledAdditionalButtons = styled.div`
  display: flex;
`;
