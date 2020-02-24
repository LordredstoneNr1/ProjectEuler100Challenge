// using sieve of erasthotenes here, cause it's hopefully faster
class Generator {
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
      // this works because we only need to check primes 10x bigger than n
      this.primes.forEach(a => {
        if (n % a == 0) {
          return false;
        }
      });
      return true;
    }
  }
}


function circularPrimes(n) {
  const gen = new Generator(n);
  var found = 0;
  var p = gen.getNextPrime();
  while (p <= n && p != -1) {
    const digits = new Set(p.toString().split(""));
    const start = p;
    const len = Math.ceil(Math.log10(p));
    var circular = true;
    if (digits.size > 1) {
      circular = !digits.has('2') && !digits.has('4') && !digits.has('6') && !digits.has('8') && !digits.has('0') && !digits.has('5');
    } // pre-filtering: if any of these appear, they will appear at the end -> not prime
    p = rotate(p, len);
    while (circular && p != start) {
      if (!gen.isPrime(p)) {
        circular = false;
      }
      p = rotate(p, len);
    }
    if (circular) {
      found++;
    }
    p = gen.getNextPrime();
  }
  return found;
}

function rotate(n, length) {
  const digit = Math.floor(n / 10**Math.ceil(length-1)); 
  // don't pick the first digit, pick the one at "length" (may be 0)
  n %= 10**Math.ceil(length-1);
  n = 10*n + digit;
  return n;
}

circularPrimes(1000000);