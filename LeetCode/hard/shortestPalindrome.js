var shortestPalindrome = function(s) {
  let reversed = s
    .split("")
    .reverse()
    .join("");
  let index = 0;
  while (index < s.length) {
    let firstHalf = s.substr(0, s.length - index);
    let secondHalf = reversed.substr(index, reversed.length - index);
    if (firstHalf == secondHalf) {
      break;
    }
    index++;
  }
  return reversed.substr(0, index) + s;
};
