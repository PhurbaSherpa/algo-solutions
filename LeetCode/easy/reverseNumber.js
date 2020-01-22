function reverse(x) {
  let num = String(x);
  num = num.split("").reverse();

  let reversed = "";
  num.forEach(digit => {
    if (digit === "-") {
      reversed = digit + reversed;
    } else {
      reversed += digit;
    }
  });
  return +reversed < 2147483648 && +reversed > -2147483648 ? +reversed : 0;
}
