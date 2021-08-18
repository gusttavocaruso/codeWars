function addArrays(array1, array2) {  
  if (array1.length === 0 && array2.length === 0) {
    return []
  } else if (array1.length === 0) {
    return array2
  } else if (array2.length === 0) {
    return array1
  }
  
  let array1ToNumber = parseInt(array1.join(''));
  let array2ToNumber = parseInt(array2.join(''));

  if(array2[0] < 0){
    const somaArray = array1ToNumber + array2ToNumber
    const x = somaArray.toString().split('');
    const y = x.map((y) => y === '-' ? '' : parseInt(-y))
    return [y.toString().replace(/,/, '')];
  }

  if(array1[0] < 0){
    const somaArray = array1ToNumber + array2ToNumber
    const x = somaArray.toString().split('');
    const y = x.map((y) => y === '-' ? '' : parseInt(-y))
    return [y.toString().replace(/,/, '')];
  }

  const somaArray = array1ToNumber + array2ToNumber
  const x = somaArray.toString().split('');
  return x.map((y) => parseInt(y))

}

const arr1 = [6, 7]
const arr2 = [-6, 9]

console.log(addArrays(arr1, arr2))

// addArrays([6,7], [6,7]), [ 1, 3, 4 ]