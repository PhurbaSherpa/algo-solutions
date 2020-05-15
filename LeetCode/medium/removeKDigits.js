var removeKdigits = function (num, k) {
  if (k === num.length) return "0";

  const stack = [];
  let removed = 0;
  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed += 1;
    }
    stack.push(n);
  }

  while (removed < k) {
    stack.pop();
    removed += 1;
  }

  let newNum = stack.join("");
  newNum = newNum.replace(/^0+/, "");

  return newNum ? newNum : "0";
};
