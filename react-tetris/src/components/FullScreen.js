import React from 'react';
import MaterialIcon from 'material-icons-react';



const  FullScreen = ({callback}) => {
  return (
  <button type='button' onClick={callback} style={
    {'background' : 'transparent', 'border' : 'none', 'outline': 'none', 'cursor': 'pointer'}
  }>
    <MaterialIcon icon="fit_screen" size='small' color='#cec4c4'  />
  </button>
  )
}
export default FullScreen;