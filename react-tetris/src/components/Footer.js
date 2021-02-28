import React from 'react';

import rsLogo from '../img/rs_school_js.svg';

import { StyledRsLogo, StyledYoutubeLink, StyledYear } from './styles/StyledFooter'

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
    <StyledYoutubeLink href='/' style={
      {'color': '#dc5454', 'textDecoration': 'none'}
    }>
      YouTube
    </StyledYoutubeLink>
  </div>
  )
}

export default Footer;