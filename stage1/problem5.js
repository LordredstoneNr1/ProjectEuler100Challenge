const factors = []

function smallestMult(n) {
  var mult = 1;
  var i = 1;
  var remainder = 0;
  while (i <= n) {
    remainder = i; // what to add to the factors, i.e. the prime factor(s) that are not yet covered.
    console.log(remainder);
    factors.forEach(function(factor) {
      if (remainder % factor == 0) {
        remainder /= factor;
        console.log(remainder);
      }
    })
    mult *= remainder;
    factors.push(remainder);
    i++;
  }
  console.log(factors);
  return mult;
}

smallestMult(20);