
export const localDropTime = () => {
  if (localStorage.getItem('DropTime')) {
    return parseInt(localStorage.getItem('DropTime'));
  }else {
    localStorage.setItem('DropTime', '1000');
    return 1000;
  }
}