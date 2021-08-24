const whichSchool  = function (age) {
  if (age < 13) { 
    return 'Elementary School';
  } else if (age >= 13 && age <= 18) {
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs';
  }
}
/* EXAMPLES:
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35)); // returns Lighthouse Labs
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8)); // returns Elementary School
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14)); // returns Secondary School
*/