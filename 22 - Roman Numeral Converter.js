/*
Convert the given number into a roman numeral.
*/

function convertToRoman(num) {
  let copyNum = num;
  let finalStr = '';
  while (copyNum > 0) {
    switch (true) {
      case (copyNum >= 1000):
        copyNum -= 1000;
        finalStr += "M";
        break;
      case (copyNum >= 900):
        copyNum -= 900;
        finalStr += "CM";
        break;
      case (copyNum >= 500):
        copyNum -= 500;
        finalStr += "D";
        break;
      case (copyNum >= 400):
        copyNum -= 400;
        finalStr += "CD";
        break;
      case (copyNum >= 100):
        copyNum -= 100;
        finalStr += "C";
        break;
      case (copyNum >= 90):
        copyNum -= 90;
        finalStr += "XC";
        break;
      case (copyNum >= 50):
        copyNum -= 50;
        finalStr += "L";
        break;
      case (copyNum >= 40):
        copyNum -= 40;
        finalStr += "XL";
        break;
      case (copyNum >= 10):
        copyNum -= 10;
        finalStr += "X";
        break;
      case (copyNum >= 9):
        copyNum -= 9;
        finalStr += "IX";
        break;
      case (copyNum >= 5):
        copyNum -= 5;
        finalStr += "V";
        break;
      case (copyNum >= 4):
        copyNum -= 4;
        finalStr += "IV";
        break;
      case (copyNum >= 1):
        copyNum -= 1;
        finalStr += "I";
        break;
      case (copyNum === 0):
        return finalStr;
      default:
        finalStr = "ERROR";
        break;
    }
  }
  return finalStr;
}

console.log(convertToRoman(2)) // should return "II".
console.log(convertToRoman(3)) // should return "III".
console.log(convertToRoman(4)) // should return "IV".
console.log(convertToRoman(5)) // should return "V".
console.log(convertToRoman(9)) // should return "IX".
console.log(convertToRoman(12)) // should return "XII".
console.log(convertToRoman(16)) // should return "XVI".
console.log(convertToRoman(29)) // should return "XXIX".
console.log(convertToRoman(44)) // should return "XLIV".
console.log(convertToRoman(45)) // should return "XLV"
console.log(convertToRoman(68)) // should return "LXVIII"
console.log(convertToRoman(83)) // should return "LXXXIII"
console.log(convertToRoman(97)) // should return "XCVII"
console.log(convertToRoman(99)) // should return "XCIX"
console.log(convertToRoman(400)) // should return "CD"
console.log(convertToRoman(500)) // should return "D"
console.log(convertToRoman(501)) // should return "DI"
console.log(convertToRoman(649)) // should return "DCXLIX"
console.log(convertToRoman(798)) // should return "DCCXCVIII"
console.log(convertToRoman(891)) // should return "DCCCXCI"
console.log(convertToRoman(1000)) // should return "M"
console.log(convertToRoman(1004)) // should return "MIV"
console.log(convertToRoman(1006)) // should return "MVI"
console.log(convertToRoman(1023)) // should return "MXXIII"
console.log(convertToRoman(2014)) // should return "MMXIV"
console.log(convertToRoman(3999)) // should return "MMMCMXCIX"