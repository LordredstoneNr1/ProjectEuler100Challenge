function sumOfNonAbundantNumbers(n) {
  // Generate Array of all sums of abundant integers
  // return n*n+1/2 - 

  var abundants = new Set();
  var sum = n * (n+1) / 2;
  for (var i = 1; i <= n; i++) { // start with 12 because why not
    if (isAbundant(i)) {
      abundants.add(i);
    } 
  }
  for (var i = 1; i <= n; i++) {
    var found = false;
    abundants.forEach(function (abundantNumber) {
      if (!found) {
        if (abundants.has(i - abundantNumber)) {
          found = true; 
          sum -= i;
        }
      } 
    })
  }
  return sum;
}

function findDivisors(n) {
  var divisors = [1];
  var remainder = n;
  for (var i = 2; i < n; i++) {
    while (remainder%i == 0) {
      divisors = divisors.concat(divisors.map(a => a*i));
      remainder /= i;
      //console.log(divisors);
    }
  } // unfortunately this generates all divisors, with 1 and n. (Not even a problem in this one)
  return Array.from(new Set(divisors)).reduce((a,b) => a+b, 0); // convert to set and back to get rid of duplicates
}

function isAbundant(n) {
  return (2*n < findDivisors(n));
}
// No idea where this goes wrong, the corresponding Java implementation is correct and relatively fast imo
console.log(sumOfNonAbundantNumbers(10000));
