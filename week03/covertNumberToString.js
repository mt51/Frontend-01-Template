function convertNumberToString(number, radix) {
  let integer = Math.floor(number);
  let fraction = number - integer;
  let string = '';

  while (integer > 0) {
    string = String(integer % radix) + string;
    integer = Math.floor(integer / radix);
  }


  let fractionString = '';

  while (fraction > 0) {
    fractionString += Math.floor(fraction * radix);
    fraction = fraction * radix - Math.floor(fraction * radix);
    debugger;
    if (`${string}.` + fractionString == number) {
      break;
    }
  }
  return fractionString ? `${string}.${fractionString}` : string;
}

console.log(convertNumberToString(123.456, 10));