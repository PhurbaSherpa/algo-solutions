function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1
    .split("")
    .sort()
    .join("");
  str2
    .split("")
    .sort()
    .join("");
  return str1 === str2;
}

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  let counter = {};
  let arr = str1.split("");
  for (let letter of arr) {
    counter[letter] = counter[letter] ? counter[letter] + 1 : 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    letters[char]--;
    if (letters[char] < 0) {
      return false;
    }
  }
  return true;
}
