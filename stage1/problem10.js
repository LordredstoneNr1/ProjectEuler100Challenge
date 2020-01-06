var primes;
function primeSummation(n) {
  primes = [2];
  var sum = 2;
  var i = 3;
  while (i < n) {
    if (isPrime(i)) {
      primes.push(i);
      sum += i;
    }
    i+=2;
  }
  return sum;
}

function isPrime(x) {
  var i = 0;
  while (i < primes.length) {
    if (x%primes[i] == 0) {
      return false;
    }
    if (primes[i] > Math.sqrt(x)) {
      i = primes.length; //skip because it doesn't work if not optimized
    }
    i++;
  }
  return true;
}

primeSummation(2000000);