for (let n = 100; n < 201; n++) {
  if (n % 3 === 0) {
    if (n % 4 === 0) console.log('LoopyLighthouse'); // by 3 and 4
    else console.log('Loopy'); // by 3 only, not 4
  } else if (n % 4 === 0) {
    console.log('Lighthouse'); // by 4 only, not 3
  } else console.log(n);       // not 3 nor 4
}