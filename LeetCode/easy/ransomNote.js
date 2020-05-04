var canConstruct = function (ransomNote, magazine) {
  let magazineArr = magazine.split("");

  let letters = new Map();

  for (let letter of magazineArr) {
    if (letters.has(letter)) {
      let count = letters.get(letter);
      count++;
      letters.set(letter, count);
    } else {
      letters.set(letter, 1);
    }
  }

  let ransomArr = ransomNote.split("");

  for (let i = 0; i < ransomArr.length; i++) {
    if (!letters.has(ransomArr[i])) return false;
    let count = letters.get(ransomArr[i]);
    if (count === 1) {
      letters.delete(ransomArr[i]);
    } else {
      count--;
      letters.set(ransomArr[i], count);
    }
  }
  return true;
};
