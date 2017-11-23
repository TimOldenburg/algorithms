/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function primeCheck(i) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;
  let i = 2;
  while (i <= num) {
    if (primeCheck(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(sumPrimes(10)) // should return a number.
console.log(sumPrimes(10)) // should return 17.
console.log(sumPrimes(977)) // should return 73156.