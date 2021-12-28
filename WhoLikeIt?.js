function likes(names) {
  const lgth = names.length;
  const st = names[0];
  const nd = names[1];

  if(lgth === 0) return 'no one like this';
  if(lgth === 1) return `${names} like this`;
  if(lgth === 2) return `${st} and ${nd} like this`;
  if(lgth === 3) return `${st}, ${nd} and ${names[2]} like this`
  if(lgth > 3) return `${st}, ${nd} and ${lgth - 2} others like this`;
}

const arr1 = ['peter'];
const arr2 = ['peter', 'jacob'];
const arr3 = ['peter', 'jacob', 'mark'];
const arr4 = ['peter', 'james', 'mark', 'gusta', 'debs', 'ful'];

console.log(likes(arr4));
