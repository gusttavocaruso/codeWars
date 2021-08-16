function alphabetWar(reinforces, airstrikes) {
  
  airstrikes.forEach((strike) => {
    const eachStrike = strike.split('');
    let indexStrike = [];

    eachStrike.map((each, index) => {
      if (each === '*') {
        let i = index;
      }
    })
    // console.log(indexStrike);
  })
}

const a = ["abcdefg", "hijklmn"];
const b = ["   *   ", "*  *   "];
console.log(alphabetWar(a, b));


// UNFINISHED YET ---------------*
