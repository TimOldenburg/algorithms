/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  let sortedArr = arr.sort((a, b) => b < a);
  let num = sortedArr[0];
  let sum = 0;
  while (num <= sortedArr[1]) {
    sum += num;
    num++;
  }
  return sum;
}

console.log(sumAll([1, 4])) //should return a number.
console.log(sumAll([1, 4])) //should return 10.
console.log(sumAll([4, 1])) //should return 10.
console.log(sumAll([5, 10])) //should return 45.
console.log(sumAll([10, 5])) //should return 45.