function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  var n = 0;
  while (true) {
    n++;
    var found = true;
    for (var i = 0; found && i < targetConsecutive; i++) {
      if (numberOfFactors(n+i) != targetNumPrimes) {
        found = false;
      }
    }
    if (found) {
      return n;
    }
  }
}

function factor(n) {
  const res = [];
  for (var i = 2; i <= Math.sqrt(n); i++) {
    while (n % i == 0) {
      res.push(i);
      n /= i;
    }
  }
  if (n > 1) {
    res.push(n);
  }
  return res;
}

function numberOfFactors(n) {
  return new Set(factor(n)).size;
}

distinctPrimeFactors(4, 4);
