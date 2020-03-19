function goldbachsOtherConjecture() {
  const size = 10000;
  var base = new Array(size).fill(true);
  base[0] = false;
  base[1] = false;
  for (var i = 2; i < Math.sqrt(size); i++) {
    if (base[i] == false) {
      continue;
    }
    var k = i**2;
    while (k < size) {
      base[k] = false;
      k += i;
    }
  }
  const primeSet = new Set(base.reduce(function (res, isPrime, n) {
    if (isPrime) {
      res.push(n);
    }
    return res;
  }, []));
  var n = 9; // first non-prime odd number
  while (primeSet.has(n) || test(n, primeSet)) {
    n += 2;
  }
  console.log(n);
  return n;
}

function test(n, primeSet) {
  for (var i = 0; i < Math.sqrt(n); i++) {
    if (primeSet.has(n - 2*i**2)) {
      return true;
    }
  }
  return false;
}

goldbachsOtherConjecture();
function goldbachsOtherConjecture() {
  const size = 10000;
  var base = new Array(size).fill(true);
  base[0] = false;
  base[1] = false;
  for (var i = 2; i < Math.sqrt(size); i++) {
    if (base[i] == false) {
      continue;
    }
    var k = i**2;
    while (k < size) {
      base[k] = false;
      k += i;
    }
  }
  const primeSet = new Set(base.reduce(function (res, isPrime, n) {
    if (isPrime) {
      res.push(n);
    }
    return res;
  }, []));
  var n = 9; // first non-prime odd number
  while (primeSet.has(n) || test(n, primeSet)) {
    n += 2;
  }
  console.log(n);
  return n;
}

function test(n, primeSet) {
  for (var i = 0; i < Math.sqrt(n); i++) {
    if (primeSet.has(n - 2*i**2)) {
      return true;
    }
  }
  return false;
}

goldbachsOtherConjecture();
