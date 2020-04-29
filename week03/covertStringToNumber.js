function getRadix(string) {
  if (string.startsWith('0X') || string.startsWith('0x')) {
    return 16;
  }

  if (string.startsWith('0')) {
    return 8;
  }


  return 10;
}

function convertStringToNumber(string, radix) {
  if (typeof string === 'number') {
    return string;
  }

  radix = radix || getRadix(string);

  let chars = string.split('').filter(item => !!item);
  const first = chars[0];
  let sign = 1;

  if (first === '-') {
    sign = -1;
    chars = chars.splice(1);
  }

  if (chars[0].codePointAt(0) >= '0'.codePointAt(0) + radix) {
    return NaN;
  }

  let number = 0;
  for(let i = 0; i < chars.length; i++) {
    let char = chars[i];
    let charCode = char.codePointAt(0);
    if (charCode >= '0'.codePointAt(0) + radix) {
      break;
    }
    number = number * radix;
    number += charCode - '0'.codePointAt(0);
  }

  return sign * number;
}

module.exports = convertStringToNumber;
