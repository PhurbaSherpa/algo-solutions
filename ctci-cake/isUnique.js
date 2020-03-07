function isUnique(str) {
  let unique = "";
  for (let i = 0; i < str.length; i++) {
    if (unique.includes(str[i])) return false;
    unique += str[i];
  }
  return true;
}

function isUnique(str) {
  str
    .split("")
    .sort()
    .join("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) return false;
  }
  return true;
}

function isUnique(str) {
  let unique = new Map();

  for (let i = 0; i < str.length; i++) {
    if (unique.has(str[i])) return false;
    unique.set(str[i], true);
  }
  return ture;
}
