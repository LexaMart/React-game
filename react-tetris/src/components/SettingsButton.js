import React from 'react';
import MaterialIcon from 'material-icons-react';

import { StyledSettingsButton } from './styles/StyledSettingsButton';

const SettingsButton = () => (
  <StyledSettingsButton>
    <MaterialIcon icon="settings" size='medium' color='#cec4c4'  />
  </StyledSettingsButton>
)
export default SettingsButton;