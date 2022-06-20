function getCount(str) {
  var vowelsCount = [];
  let strSpl = str.split('');  

  for (const element of strSpl) {
    let x = element;
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
      vowelsCount.push(x);
    }
  }  
  return vowelsCount.length;
}
