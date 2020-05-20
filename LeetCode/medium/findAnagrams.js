var findAnagrams = function (s, p) {
  let indicies = [];
  let unique = 0;

  let lib = new Map();

  for (let i = 0; i < p.length; i++) {
    let count = lib.has(p[i]) ? lib.get(p[i]) : 0;
    if (count === 0) {
      unique++;
    }
    count++;
    lib.set(p[i], count);
  }
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let leftChar = s[left];
    let rightChar = s[right];
    if (lib.has(rightChar)) {
      let count = lib.get(rightChar);
      count--;
      if (count === 0) unique--;
      lib.set(rightChar, count);
    }
    if (unique === 0) indicies.push(left);
    if (right - left === p.length - 1) {
      if (lib.has(leftChar)) {
        let count = lib.get(leftChar);
        count++;
        if (count === 1) unique++;
        lib.set(leftChar, count);
      }
      left++;
    }

    right++;
  }

  return indicies;
};
