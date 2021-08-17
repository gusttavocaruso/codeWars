function vaporcode(string) {
  return string.replace(/ /g, '').toUpperCase().split('').join('  ')
}

const str = 'Lets go to the movies'
console.log(vaporcode(str));