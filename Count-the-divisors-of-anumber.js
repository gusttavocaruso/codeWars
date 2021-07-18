function getDivisorsCnt(n){
  let repeat = [];
  for (let i = 0; i <= n; i += 1) {
    let x = n % i === 0 ? repeat.push(1) : '';
  }
  return repeat.length;
}
console.log(getDivisorsCnt(5));
