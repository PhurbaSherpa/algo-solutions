function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str2.length; i++) {
    if (!str2.inlcudes(str[i])) return false;
  }
  return true;
}

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

  let l1 = 0;
  let l2 = 0;
  let r1 = str1.length - 1;
  let r2 = str.length - 1;

  while (l1 < r1) {
    if (str1[l1] !== str2[l2] || str1[r1] !== str1[r2]) return false;
  }
  return true;
}
