var checkStraightLine = function (coordinates) {
  let slope =
    (coordinates[0][1] - coordinates[1][1]) /
    (coordinates[0][0] - coordinates[1][0]);

  for (let i = 2; i < coordinates.length; i++) {
    let point1 = coordinates[i - 1];
    let point2 = coordinates[i];

    let deltaX = point1[0] - point2[0];
    let deltaY = point1[1] - point2[1];

    if (deltaY / deltaX !== slope) return false;
  }

  return true;
};
