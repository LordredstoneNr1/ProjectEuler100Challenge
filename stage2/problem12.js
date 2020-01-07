const primes = [2];

function divisibleTriangleNumber(n) {
  var triangleNr = 1 //Math.ceil(n/3);
  var flag = false;
  var tr = 1;
  while (findFactors(tr) <= n) {
    triangleNr++;
    flag = !flag;
    if (flag) {
      tr = (triangleNr+1)/2;
      tr *= triangleNr;
    } else {
      tr = (triangleNr)/2;
      tr *= (triangleNr+1);
    }
  }
  return tr;
}

function findFactors(number) {
  var pointer = 0;
  var factors = 1;
  var currentExp = 0;
  while (number > 1) {
    currentExp = 0;
    while (number%primes[pointer] == 0) {
      number /= primes[pointer];const primes = [2];

function divisibleTriangleNumber(n) {
  var triangleNr = 1 //Math.ceil(n/3);
  var tr = 1;
  while (findFactors(tr) <= n) {
    triangleNr++;
    tr = (triangleNr)*(triangleNr+1)/2;
  }
  return tr;
}

function findFactors(number) {
  var pointer = 0;
  var factors = 1;
  var currentExp = 0;
  while (number > 1) {
    currentExp = 0;
    while (number%primes[pointer] == 0) {
      number /= primes[pointer];
      currentExp++;
    }
    if (isPrime(number)) {
      primes.push(number);
      //console.log("Primes: ", primes);
    }
    factors *= (currentExp+1);
    pointer++; 
  } 
  return factors; 
}

function isPrime(x) {
  if (x == 1) {
    return false;
  }
  var i = 0;
  while (i < primes.length) {
    if (x%primes[i] == 0) {
      return false;
    }
    i++;
  }
  return true;
}

//test times out, the java program works. Just takes an hour or so.
console.log(divisibleTriangleNumber(500))

      currentExp++;
    }
    if (isPrime(number)) {
      primes.push(number);
      //console.log("Primes: ", primes);
    }
    factors *= (currentExp+1);
    pointer++; 
  } 
  return factors; 
}

function isPrime(x) {
  if (x == 1) {
    return false;
  }
  var i = 0;
  while (i < primes.length) {
    if (x%primes[i] == 0) {
      return false;
    }
    i++;
  }
  return true;
}

console.log(divisibleTriangleNumber(500))