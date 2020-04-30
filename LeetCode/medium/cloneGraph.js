var cloneGraph = function (node) {
  if (!node) return;
  let copied = new Map();
  let q = [];
  let clone;
  q.push(node);

  while (q.length) {
    let next = q.shift();
    let val = next.val;
    let copy = copied.has(next.val) ? copied.get(next.val) : new Node(next.val);
    if (!clone) {
      clone = copy;
    }
    let neighbors = copy.neighbors;
    for (let neighbor of next.neighbors) {
      let nVal = neighbor.val;
      let nCopy = new Node(nVal);
      if (copied.has(nVal)) {
        nCopy = copied.get(nVal);
      } else {
        q.push(neighbor);
        copied.set(nVal, nCopy);
      }
      neighbors.push(nCopy);
    }
    copied.set(val, copy);
  }
  return clone;
};
