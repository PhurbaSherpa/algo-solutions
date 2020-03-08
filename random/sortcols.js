// TODO: figure out why last iteration of sort doesnt go through

function sortcols(str) {
  str = str.split("\n").map(s => s.split(","));

  str[0].sort((a, b) => {
    aL = a.toLowerCase();
    bL = b.toLowerCase();
    let aIdx = str[0].indexOf(a);
    let bIdx = str[0].indexOf(b);

    if (aL < bL) {
      swap(str, aIdx, bIdx);
      return -1;
    }
    if (aL < bL) {
      return 1;
    } else return 0;
  });

  function swap(str, idx1, idx2) {
    for (let i = 0; i < str.length; i++) {
      let temp = str[i][idx1];
      str[i][idx1] = str[i][idx2];
      str[i][idx2] = temp;
    }
  }
  console.log(str);

  return str;
}

sortcols(
  "steve,Andrew,michael,Yamuna,Harrison,Leslie\n3112,21352,123412,14134,1235,51325\n2,6,3,4,1,5"
);
