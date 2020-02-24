class PrimeGenerator {
  constructor (size) {
    const n = 10**Math.ceil(Math.log10(size)); // size it up to the next multiple of 10
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
    this.results = primes;
    this.primes = primes.reduce((arr, isPrime, n) => {
      if (isPrime) {
        arr.push(n);
      }
      return arr;
    }, []);
    this.index = 0;
  }

  getNextPrime() {
    if (this.index == this.primes.length) {
      return -1;
    } else {
      return this.primes[this.index++];
    }
  }

  isPrime(n) {
    if (n < this.results.length) {
      return this.results[n];
    } else {
      this.primes.forEach(a => {
        if (n % a == 0) {
          return false;
        }
      });
      return true;
    }
  }
}

function truncatablePrimes(n) {
  const size = (n < 11) ? 10000 : 1000000;
  const gen = new PrimeGenerator(size);
  var found = 0;
  var sum = 0;
  while (found < n) {
    const p = gen.getNextPrime();
    var truncatable = Math.ceil(Math.log10(p)) > 1; // don't count single-digit primes
    for (var i = 1; truncatable && i < Math.ceil(Math.log10(p)); i++) {
      const p1 = Number(p.toString().substring(0,i)); // stage i left side
      const p2 = Number(p.toString().substring(i)); // stage len-i right side
      if (!gen.isPrime(p1) || !gen.isPrime(p2)) {
        truncatable = false;
      }
    }
    if (truncatable) {
      found += 1;
      sum += p;
    }
  }
  return sum;
}

truncatablePrimes(11);
