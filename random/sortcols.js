// TODO: figure out why last iteration of sort doesnt go through

function sortcols(str) {
  str = str.split("\n").map(s => s.split(","));
  str[0].sort((a, b) => {
    // console.log(str[0]);
    aL = a.toLowerCase();
    bL = b.toLowerCase();
    let aIdx = str[0].indexOf(a);
    let bIdx = str[0].indexOf(b);
    // console.log(aIdx, bIdx);

    if (aL < bL) {
      swap(aIdx, bIdx);
      // console.log("smaller");
      return -1;
    }
    if (aL > bL) {
      // console.log("rbigger");
      swap(bIdx, aIdx);
      return 1;
    }
    // console.log("equal");
    return 0;
  });

  console.log(str);
  return str;

  function swap(idx1, idx2) {
    console.log(idx1, idx2);
    console.log(str[0][idx1], str[0][idx2]);

    for (let i = 0; i < str.length; i++) {
      let temp = str[i][idx1];
      str[i][idx1] = str[i][idx2];
      str[i][idx2] = temp;
    }
  }
}

sortcols(
  "steve,Andrew,michael,Yamuna,Harrison,Leslie\n3112,21352,123412,14134,1235,51325\n2,6,3,4,1,5"
);
