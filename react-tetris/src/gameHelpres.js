export let STAGE_WIDTH = 12;
export let STAGE_HEIGHT = 20;


export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  );