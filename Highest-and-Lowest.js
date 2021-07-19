function highAndLow(numbers) {
  let split = numbers.split(' ');
  const x = split.map((number) => parseInt(number))
  const highFirstLowLast = x.sort((a, b) => b - a);
  const lastIndex = highFirstLowLast.length - 1;

  return `${highFirstLowLast[0]} ${highFirstLowLast[lastIndex]}`;
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
