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

String.prototype.isPandigital= function (n) {
  if (this.length != n) {
    return false;
  }
  const digits = new Set(this.split("").map(a => Number(a)));
  for (var i = 1; i <= n; i++) {
    if (!digits.has(i)) {
      return false;
    }
  }
  return true;
}

Number.prototype.isPandigital = function (n) {
  return this.toString().isPandigital(n);
}

function pandigitalPrime(n) {
  var max = 0;
  const gen = new PrimeGenerator(10**n);
  var i = 0;
  while ((i = gen.getNextPrime()) != -1) {
    if (i.isPandigital(n)) {
      max = i; // no need to check if it's bigger, the generator returns them ordered
    }
  }
  return max;
}

pandigitalPrime(7);
