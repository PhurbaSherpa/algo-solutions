function medianSort(arr) {
  arr.sort((a, b) => {
    if (Array.isArray(a)) {
      a = findMedian(a);
    }
    if (Array.isArray(b)) {
      b = findMedian(b);
    }

    return a - b;
  });

  return arr;
}

function findMedian(arr) {
  let copy = [...arr];
  let sorted = copy.sort((a, b) => a - b);
  let median;
  let mid = sorted.length / 2;
  if (sorted.length % 2 === 1) {
    median = sorted[Math.floor(mid)];
  } else {
    median = (sorted[mid] + sorted[mid - 1]) / 2;
  }
  return median;
}

let arr1 = [3, [-2, 4, 9]];
let arr2 = [[12, 9, 1, 25], 4];
let arr3 = [[2.4, 0.2, 9.8], 0, [-1], [-9, -4]];
console.log(medianSort(arr1));
console.log(medianSort(arr2));
console.log(medianSort(arr3));
