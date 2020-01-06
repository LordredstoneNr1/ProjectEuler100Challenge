var primes;

function nthPrime(n) {
  primes = [2];
  var i = 3;
  while (primes.length < n) {
    if (isPrime(i)) {
      primes.push(i);
    }
    i++;
  }
  return primes[primes.length-1];
}

function isPrime(x) {
  var i = 0;
  while (i < primes.length) {
    if (x%primes[i] == 0) {
      return false;
    }
    i++;
  }
  return true;
}

nthPrime(10001);