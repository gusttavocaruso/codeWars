function multiTable(number) {
  let math = '';
  for (let i = 1; i <= 10; i += 1) {
    i === 10 ?
      math +=  i + ' * ' + number + ' = ' + i * number
      : math +=  i + ' * ' + number + ' = ' + i * number + '\n';
  }
  return math;
}
console.log(multiTable(5))
