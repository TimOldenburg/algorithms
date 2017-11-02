/*
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  let newStr = "";
  while (num > 0) {
    newStr += str;
    num--;
  }
  return newStr;
}

console.log(repeatStringNumTimes("*", 3)) //should return "***".
console.log(repeatStringNumTimes("abc", 3)) //should return "abcabcabc".
console.log(repeatStringNumTimes("abc", 4)) //should return "abcabcabcabc".
console.log(repeatStringNumTimes("abc", 1)) //should return "abc".
console.log(repeatStringNumTimes("*", 8)) //should return "********".
console.log(repeatStringNumTimes("abc", -2)) //should return "".
//The built-in repeat()-method should not be used