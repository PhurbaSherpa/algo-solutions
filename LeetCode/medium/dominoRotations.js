var minDominoRotations = function(A, B) {
  let swaps = 0;
  let modeA = frequencyOfMode(A);
  let modeB = frequencyOfMode(B);
  let arr, num;

  if (modeB.freq > modeA.freq) {
    let temp = B;
    B = A;
    A = temp;
    mode = modeB.num;
  } else {
    mode = modeA.num;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== mode) {
      let temp = A[i];
      A[i] = B[i];
      B[i] = temp;
      swaps++;
    }
  }

  if (checkIfAllEqual(A)) {
    return swaps;
  } else {
    return -1;
  }

  function frequencyOfMode(arr) {
    let freq = {};
    let mode = 0;
    let highestfreq = 0;
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      freq[num] = freq[num] ? freq[num] + 1 : 1;
      if (freq[num] > highestfreq) {
        highestfreq = freq[num];
        mode = num;
      }
    }
    return { num: mode, freq: highestfreq };
  }

  function checkIfAllEqual(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] !== arr[i]) return false;
    }

    return true;
  }
};
