/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  let newArr = str.split(" ").sort((a, b) => a.length < b.length);
  return newArr[0].length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")) //should return a number.
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")) //should return 6.
console.log(findLongestWordLength("May the force be with you")) //should return 5.
console.log(findLongestWordLength("Google do a barrel roll")) //should return 6.
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow")) //should return 8.
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")) //should return 19.