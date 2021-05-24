function powersOfTwo(n){
  let Lista = [];
    if (n >= 0) {
      for (i = 0; i <= n; i += 1) {
        Lista.push(2 ** i);
      }
    }
  return Lista
}