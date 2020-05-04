var bitwiseComplement = function (N) {
  if (N === 0) return 1;
  let flip = toBinaryFlip(N);
  return toDec(flip);

  function toBinaryFlip(decimal) {
    let highest = 0;
    let start = 0;
    let binary = [];
    while (decimal >= Math.pow(2, start)) {
      start++;
    }
    start--;
    while (start >= 0) {
      if (Math.pow(2, start) > decimal) {
        binary.push(1);
      } else {
        decimal -= Math.pow(2, start);
        binary.push(0);
      }
      start--;
    }
    return binary;
  }

  function toDec(binary) {
    let length = binary.length - 1;
    let total = 0;
    for (let i = 0; i <= length; i++) {
      if (flip[i] === 1) {
        total += Math.pow(2, length - i);
      }
    }
    return total;
  }
};
