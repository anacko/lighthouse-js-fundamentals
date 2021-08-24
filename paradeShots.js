const finalPosition = function (moves) {
  let position = [0,0] // starting coodinates: x,y
  for (let move in moves) {
    switch (moves[move]) {
      case 'north': position[1]++; break;
      case 'south': position[1]--; break;
      case 'east': position[0]++; break;
      case 'west': position[0]--; break;
    }
  }
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
//console.log(finalPosition(moves)); // output: [-1,4]