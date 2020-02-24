function intRightTriangles(n) {
  var result = 0;
  var max = 0;
  for (var i = 3; i <= n; i++) {
    if (countResults(i) > max) {
      result = i;
      max = countResults(i);
    }
  }
  return result;
}

function countResults(i) {
  var results = 0;
  /* a**2 + b**2 = c**2 
  a + b + c = i <=> c = i - a - b;
  ==> a**2 + b**2 == (i-a-b)**2;
  */

  for (var a = 1; a < i - 1; a++) {
    for (var b = 1; b <= a; b++) {
      const c = i - a - b;
      if (a**2 + b**2 == c**2) {
        results++;
      }
    }
  }
  return results;
}

intRightTriangles(500); 
