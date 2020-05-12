var floodFill = function (image, sr, sc, newColor) {
  let original = image[sr][sc];
  let visited = new Set();
  return recolor(sr, sc, newColor, original);

  function recolor(row, col, newColor) {
    if (
      row < 0 ||
      col < 0 ||
      row >= image.length ||
      col >= image[row].length ||
      image[row][col] !== original ||
      visited.has(`${row},${col}`)
    )
      return;

    visited.add(`${row},${col}`);
    image[row][col] = newColor;

    recolor(row + 1, col, newColor);
    recolor(row - 1, col, newColor);
    recolor(row, col + 1, newColor);
    recolor(row, col - 1, newColor);

    return image;
  }
};
