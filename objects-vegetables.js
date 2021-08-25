const judgeVegetable = function (vegetables, metric) {
  let submitters = [];
  let scores = [];
  for (let i = 0; i < vegetables.length; i++){
    submitters.push(vegetables[i].submitter);
    scores.push(vegetables[i][metric]);
  }
  let isWinner = [];
  for (let score of scores) {
    score === Math.max(...scores) ? isWinner.push(1) : isWinner.push(0); // <- here the problem.
  }
  let winners = [];
  for (let i = 0; i < submitters.length; i++) {
    if (isWinner[i] == 1) winners.push(submitters[i]);
  }
  if (winners.length === 1) return winners[0];
  else return winners;
};

/* 
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric)) // 'Old MAn Franklin' 
*/