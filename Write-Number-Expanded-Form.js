function expandedForm(num) {
  let numStr = num.toString().split('');
  
  for (let i = 0 ; i < numStr.length; i++ ) {
    for (let y = numStr.length - i; y > 1; y--) {
      numStr[i] += '0'; 
    }
  }

  if (num > 1000 & num <= 99999) {
    const trueAnswer = numStr.map((num2) => {
      if (num2[0] !== '0' && num2[-1] !== '0') {
        return num2
      } 
    })
    return trueAnswer.toString().replace(/,,/g, ' ').split(' ').join(' + ')
  } else if (num > 99999 & num <= 999999) {
    const trueAnswer = numStr.map((num2) => {
      if (num2[0] !== '0' && num2[-1] !== '0') {
        return num2
      } 
    })
    return trueAnswer.toString().replace(/,/g, ' ').split(' ').join(' + ')
  } else if (num > 999999) {
    const trueAnswer = numStr.map((num2,index) => {
      if (num2[0] !== '0' && num2[-1] !== '0') {
        return num2
      }
    })
    const x = trueAnswer.toString().replace(/,/g, ' ').split(' ').join(' + ')
  }

  return numStr.join(' + ')
}

  console.log(expandedForm(420370022))


// UNFINISHED YET TO BIGZIG NUMBERS ---------------*

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'


// teste codewars: 
// '90000000000000 + 2000000000000 + 90000000000 + 3000000000 + 400000000 + 3000000 + 30000 + 4000 + 500 + 70 + 3'

// Expected: '4000000 + 900000 + 80000 + 2000 + 300 + 40 + 2', = 4982342
// instead got: '4000000,900000,80000,2000,300,40,2'

// Expected: '400000000 + 20000000 + 300000 + 70000 + 20 + 2', = 420370022
// instead got: '400000000 + 20000000 +  + 300000 + 70000 +  +  + 20 + 2'

// Expected: '9000000',
// instead got: '9000000 +  +  +  +  +  + '