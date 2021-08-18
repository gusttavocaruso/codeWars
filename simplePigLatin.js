function pigIt(str){
  const items = str.split(' ');

  const newMix = items.map((item) => {
    return item.match(/[A-z]/i) ? 
    `${item.substr(1)}${item.substr(0, 1)}ay`
    : item
  });

  return newMix.join(' ');
}

const str = 'Hello World !';
console.log(pigIt(str))

/** elloHay orldway ! */