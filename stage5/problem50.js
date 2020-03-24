function consecutivePrimeSum(limit) {
  const n = 10**Math.ceil(Math.log10(limit)); // size it up to the next multiple of 10
    const primes = new Array(n+1).fill(true);
    primes[0] = false;
    primes[1] = false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (primes[i]) {
        for (var mult = i*i; mult <= n; mult +=i) {
          primes[mult] = false;
        }
      } // else skip to next prime
    }
    const primeArr = primes.reduce((arr, isPrime, n) => {
      if (isPrime) {
        arr.push(n);
      }
      return arr;
    }, []);

    var sum = 0;
    var sums = primeArr.reduce((res, prime, index) => {
      sum += prime;
      res[index] = sum;
      return res;
    }, new Array(primeArr.length));

    var result = 0;
    var maxPrimes = 0;
    for (var i = 0; i < sums.length; i++) {
      for ( var j = i-(maxPrimes + 1); j >= 0; j--) { // count down from highest so the primes grow
        const diff = sums[i] - sums[j]; 
        if (diff > limit) {
          break;
        }
        if (primeArr.findIndex(a => a == diff) != -1) {
          result = diff;
          maxPrimes = i - j; // start inner loop lower to get faster!
        }
      }
    }
    return result;
}

consecutivePrimeSum(1000000);
