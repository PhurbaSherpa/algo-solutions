var findJudge = function (N, trust) {
  if (!trust.length) return N;

  let map1 = new Map();
  let map2 = new Set();

  for (let i = 0; i < trust.length; i++) {
    let trusted = trust[i][0];
    let trustee = trust[i][1];

    map2.add(trusted);

    if (!map1.has(trustee)) {
      map1.set(trustee, 1);
    } else {
      let count = map1.get(trustee);
      count++;
      map1.set(trustee, count);
    }
  }

  let allTrustee = N - 1;

  while (N !== 0) {
    if (map1.get(N) === allTrustee) {
      if (!map2.has(N)) return N;
    }
    N--;
  }

  return -1;
};
