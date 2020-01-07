function latticePaths(gridSize) {
 // literally pascal's triangle at (2*gridsize | gridsize)
  const triangle = [];
  for (var i = 0; i <= 2*gridSize; i++) {
      triangle[i] = [];
      for (var j = 0; j <= i; j++) {
        if (j == 0 || j == i) {
          triangle[i].push(1);
        } else {
          triangle[i].push(triangle[i-1][j-1] + triangle[i-1][j]);
        }
      }
    }
  console.log(triangle);
  return triangle[2*gridSize][gridSize]
}

latticePaths(4);

