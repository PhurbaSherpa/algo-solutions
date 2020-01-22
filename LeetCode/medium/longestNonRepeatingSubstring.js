function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let currentCount = 0;
  let past = new Map();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!past.has(char)) {
      currentCount++;
      past.set(char, i);
    } else {
      maxLength = Math.max(currentCount, maxLength);
      i = past.get(char);
      currentCount = 0;
      past.clear();
    }
  }
  return Math.max(currentCount, maxLength);
}
