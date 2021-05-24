function getRealFloor(n) {
  let EuropeSistem = 0;
  
  if (n < 1) {
    EuropeSistem = n;
  } else if (n === 1) {
    EuropeSistem = 0;
  } else if (n > 1 && n < 13) {
    EuropeSistem = n - 1; 
  } else if (n > 13) {
    EuropeSistem = n - 2; 
} 
  return (EuropeSistem); 
}
console.log(getRealFloor(15));
