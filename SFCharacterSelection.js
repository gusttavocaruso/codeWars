function streetFighterSelection(fighters, position, moves){
  let pos1 = position[0];
  let pos2 = position[1];

  const upArr = fighters[0];
  const downArr = fighters[1];

  const movs = moves.map((mv) => {
    if(mv === 'up') pos2 += 1;
    if(mv === 'down') pos2 -= 1;
    if(mv === 'right') pos1 += 1;
    if(mv === 'left') pos1 -= 1;
  })

  // fighters.map((fighterz) => fighterz[0]);
  //   fighterz.forEach((fighter) => console.log(fighter)));

  return pos1;
}

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
moves = ['up', 'left', 'right', 'left', 'left'];
initial_position = [0,0];

console.log(streetFighterSelection(fighters, initial_position, moves));
