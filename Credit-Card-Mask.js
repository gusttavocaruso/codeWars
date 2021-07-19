// return masked string
function maskify(cc) {
  const ccLength = cc.length;
  let arrSharp = [];

  for (let i = 0; i < ccLength - 4; i += 1) {
    arrSharp.push('#');
  }

  arrSharp.push(cc[ccLength - 4]);
  arrSharp.push(cc[ccLength - 3]);
  arrSharp.push(cc[ccLength - 2]);
  arrSharp.push(cc[ccLength - 1]);

  return arrSharp.toString().split(',').join('')
}

console.log(maskify('123456789'));





// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
