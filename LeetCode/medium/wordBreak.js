var wordBreak = function (s, wordDict) {
  const dict = new Set(wordDict);
  const visited = new Set();
  const q = [0];

  while (q.length) {
    const start = q.shift();
    if (!visited.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
        if (dict.has(s.slice(start, end))) {
          if (end === s.length) return true;
          q.push(end);
        }
      }
      visited.add(start);
    }
  }
  return false;
};
