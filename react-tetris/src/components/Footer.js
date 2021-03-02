import React from 'react';

import rsLogo from '../img/rs_school_js.svg';

import { StyledRsLogo, StyledYoutubeLink, StyledYear, StyledGit } from './styles/StyledFooter'

const Footer = () => {
  return (
  <div style={
    {'width': '100%', 'height': '5vh', 'background': 'black',
  'color': 'white', 'display': 'flex', 'justifyContent': 'space-around', 
'alignItems': 'center'}
  }>
    <StyledYear>2021</StyledYear>
    <a href='https://rs.school/js/'>
      < StyledRsLogo src={rsLogo} alt='rslogo' style={
        {
          'width': '80px',
          'background': 'white'
        }
      } />
    </a>
    <StyledGit href='https://github.com/LexaMart' style={
        {
          'textDecoration': 'none',
          'color': 'white',
          'fontfamily': 'Pixel, Arial, Helvetica, sans-serif'
          }
        }
      >LexaMart's GIT
      </StyledGit>
    <StyledYoutubeLink href='https://youtu.be/OobvqJDOkUY' style={
      {'color': '#dc5454', 'textDecoration': 'none'}
    }>
      YouTube
    </StyledYoutubeLink>
  </div>
  )
}

export default Footer;
