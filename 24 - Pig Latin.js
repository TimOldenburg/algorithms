/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let pigLatinArr = str.split("");
  let index = pigLatinArr.findIndex(element => (/[aeiou]/).test(element));
  if (index === 0) {
    return str + "way";
  }
  let cluster = pigLatinArr.splice(0, index);
  return pigLatinArr.concat(cluster.concat("ay")).join("");
}

console.log(translatePigLatin("california")) // should return "aliforniacay".
console.log(translatePigLatin("paragraphs")) // should return "aragraphspay".
console.log(translatePigLatin("glove")) // should return "oveglay".
console.log(translatePigLatin("algorithm")) // should return "algorithmway".
console.log(translatePigLatin("eight")) // should return "eightway".
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.