const findSmallestInt = (args) => {
  const azArr = args.sort((a, b) => a - b);
  return azArr[0]
}

const arr = [34, 15, 88, 2];
const arr2 = [34, -345, -1, 100]

console.log(findSmallestInt(arr))
console.log(findSmallestInt(arr2))