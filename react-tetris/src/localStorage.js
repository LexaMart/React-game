let localArray = [];

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

export const localScore = (newScore, newRows) => {
  
  if (localStorage.getItem('ScoreArray') && newScore !== 0) {
    localArray = JSON.parse(localStorage.getItem("ScoreArray"));
        localArray.push({score : newScore, rows: newRows});
        localArray.sort();
        localArray.reverse();
        localStorage.setItem("ScoreArray", JSON.stringify(localArray))
  } else {
      if (newScore){
        localArray.push({score : newScore, rows: newRows});
        localStorage.setItem("ScoreArray", JSON.stringify(localArray));
      } else localStorage.setItem("ScoreArray", JSON.stringify(localArray));
  }
}
