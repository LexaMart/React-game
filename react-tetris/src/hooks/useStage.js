import { useState } from 'react';
import { createStage } from '../gameHelpres';

export const useStage = () => {
  const [stage, setStage] = useState(createStage());
  return [stage, setStage]
}