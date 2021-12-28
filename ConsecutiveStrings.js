function longestConsec(strarr, k) {
  const strarrLength = [];
  strarr.forEach((str) => strarrLength.push(str.length));

  return strarrLength;
}

const strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"];

console.log(longestConsec(strarr, 2));
