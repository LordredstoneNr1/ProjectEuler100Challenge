function maximumPathSumI(triangle) {
  for (var level = 1; level < triangle.length; level++) {
    for (var pos = 0; pos < triangle[level].length; pos++) {
      if (pos == 0) { // no need to handle last case as it will be max(val, 0) = val
        triangle[level][pos] += triangle[level-1][pos];
      } else { // pos > 0 here so pos-1 is defined
        triangle[level][pos] += max(triangle[level-1][pos-1], triangle[level-1][pos]);
      }
    }
  console.log(triangle[level]);
  }
  return triangle[triangle.length-1].sort( (a,b) => b-a)[0];
}

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

maximumPathSumI(testTriangle);