
export const localDropTime = (customInterval) => {
  if(customInterval) {
    localStorage.setItem('DropTime', customInterval);
  }
  else if (localStorage.getItem('DropTime')) {
    return parseInt(localStorage.getItem('DropTime'));
  }else {
    localStorage.setItem('DropTime', '1000');
    return 1000;
  }
}

export const localScore = (newScore) => {
  let ScoreArr = [
    
  ]
}
