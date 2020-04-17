var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let list = [];
    let key = word
      .split("")
      .sort((a, b) => {
        if (a > b) return 1;
        if (b > a) return -1;
        return 0;
      })
      .join("");
    if (map.has(key)) {
      list = map.get(key);
    }
    list.push(word);
    map.set(key, list);
  }
  let final = [];
  for (let pair of map) {
    final.push(pair[1]);
  }
  return final;
};
