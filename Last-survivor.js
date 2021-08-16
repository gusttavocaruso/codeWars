function lastSurvivor(letters, coords) {

  coords.splice()
  const coordsSize = coords.length;
  for (let i = 0; i < coordsSize; i += 1) {
    console.log(letters[coords[i]])
  }
    // return letters[coords[0]];
}

console.log(lastSurvivor('kbc', [2, 1]))

//remove 1 elemento do índice 3
// removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]


// let str = "zbk", arr = [0, 1]
// str = "bk", arr = [1]
// str = "b", arr = []
// return 'b'

// it("given 'kbc' and [0, 1]", function () {
//   assert.deepEqual(lastSurvivor('kbc', [0, 1]), 'b');
// });