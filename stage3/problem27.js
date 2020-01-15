const primes = [];

function quadraticPrimes(range) {
  var product = 0;
  var maxPrimes = 0;
  for (var a = -(range-1); a < range; a++) {
    for (var b = range; b >= -range; b--) { // a goes from low to high, b goes from high to low
      const count = countConsecutivePrimes(a,b);
      if (count > maxPrimes) {
        maxPrimes = count;
        product = a*b;
      }
    }
  }
  return product;
}

function countConsecutivePrimes(a, b) {
  var n = 0;
  while (checkPrime(n**2 + a*n + b)) {
    n++;
  }
  return n;
}

function checkPrime(x) {
  if (x < 2) {
    return false;
  }
  if (primes.findIndex(a => (a==x)) != -1) {
    return true;
  }
  for (var i = 2; i < x; i++) {
    if (x%i == 0) {
      return false;
    }
  }
  primes.push(x);
  return true;
}

console.log(quadraticPrimes(1000));
