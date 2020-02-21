var topKFrequent = function(words, k) {
  let frequencyCounter = {};
  let final = [];
  words.sort();
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    count++;
    if (words[i + 1] !== words[i]) {
      frequencyCounter[count]
        ? frequencyCounter[count].push(words[i])
        : (frequencyCounter[count] = [words[i]]);
      count = 0;
    }
  }
  let keys = Object.keys(frequencyCounter);
  keys.sort((a, b) => b - a);
  for (let key of keys) {
    final = final.concat(frequencyCounter[key]);
  }
  console.log(final);

  return final.slice(0, k);
};
