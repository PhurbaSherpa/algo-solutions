var kClosest = function(points, K) {
  points.sort(
    (a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1])
  );
  let final = [];
  let i = 0;
  while (i < K) {
    let point = points[i];
    final.push(point);
    i++;
  }
  return final;
};
