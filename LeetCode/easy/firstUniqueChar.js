var firstUniqChar = function (s) {
  let letterMap = new Map();

  for (let letter of s) {
    letterMap.set(letter, letterMap.get(letter) + 1 || 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (letterMap.get(s[i]) === 1) return i;
  }

  return -1;
};
