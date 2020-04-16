
    for(let i = 0; i < matrix.length/2; i++){
      for(let j = i; j < matrix.length-1-i; j++){
          let temp = matrix[i][j]
          let len = matrix.length-1
          matrix[i][j] = matrix[len-j][i]
          matrix[len-j][i] = matrix[len-i][len-j]
          matrix[len-i][len-j] = matrix[j][len-i]
          matrix[j][len-i] = temp
      }
  }
  return matrix


};
