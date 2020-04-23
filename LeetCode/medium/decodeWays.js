var numDecodings = function (s) {
  const memo = Array(s.length + 1).fill(0);
  if (!s || s[0] === "0") return 0;
  memo[0] = 1;
  memo[1] = 1;

  for (let i = 2; i < memo.length; i++) {
    if (s[i - 1] !== "0") {
      memo[i] += memo[i - 1];
    }
    let num = s[i - 2] + s[i - 1];
    if (+num >= 10 && +num <= 26) {
      memo[i] += memo[i - 2];
    }
  }
  return memo[s.length];
};
