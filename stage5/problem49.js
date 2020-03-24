function primePermutations() {
 const increase = 3330;
 const digits = 4;
 const seqLength = 3;
 const start = 1487;
 const primes = new PrimeGenerator(10**(digits+1));

 var test = primes.getNextPrime();
 while (test < start) {
   test = primes.getNextPrime();
 }

 // start with 4-digit numbers here
 var found = false;
 while (!found) {
   test = primes.getNextPrime();
   var possible = true;
   const permDigits = test.toString().split("").sort();
   for (var i = 0; possible && i < seqLength; i++) {
     if (!primes.isPrime(test + i*increase)) {
       possible = false;
     }
     if (!(test+i*increase).toString().split("").sort().equals(permDigits)) {
       possible = false;
     }
   }
   if (possible) {
     found = true;
   }
 }

 //combine result
 var res = 0;
 for (var i = 0; i < seqLength; i++) {
   res += (test+increase*i) * 10**(digits*(seqLength-1 - i));
 }
 return res;
}

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

Array.prototype.equals = function (o) {
  if (this.length != o.length) {
    return false;
  }
  for (var i = 0; i < this.length; i++) {
    if (this[i] != o[i]) {
      return false;
    }
  }
  return true;
}

primePermutations();
