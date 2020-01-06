function sumSquareDifference(n) {
  // 1 + 2*2*1 + 4
  // binomials, bitch!
  var m = n;
  var result = 0;
  while (n > 0) {
    m = n-1;
    while (m > 0) {
      result += 2*n*m; 
      m--;
    }
    n--;
  }
  return result;
}

sumSquareDifference(100);
