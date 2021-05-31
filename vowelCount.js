function getCount(str) {
  var vowelsCount = [];
  let strSpl = str.split('');
  let vowels = ['a', 'e', 'i', 'i', 'u'];
  

  for (let i = 0; i < strSpl.length; i += 1) {
    let x = strSpl[i];
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
      vowelsCount.push(x);
    }
  }  
  return vowelsCount.length;
}
