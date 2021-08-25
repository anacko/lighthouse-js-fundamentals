const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    i % 2 === 0 ?
    i % 5 === 0 ? console.log(words[0] + words[1]) : // 2 and 5
    console.log(words[0]) : // 2 not 5
    i % 5 === 0 ? console.log(words[1]) : // 5 not 2
    console.log(i);
  }
};

// loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);