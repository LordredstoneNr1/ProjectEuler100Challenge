function sumAmicableNum(n) {
  var foundPairs = [];
  for (var i = 2; i < n; i++) {
    const divs = findProperDivisors(i);
    if (foundPairs.findIndex(a => a==i) == -1 && i != divs && divs < n && findProperDivisors(divs) == i) {
      foundPairs.push(i, divs);
    }
  }
  return foundPairs.reduce((a,b) => a+b, 0);
}

function findProperDivisors(n) {
  var divisors = [1];
  var remainder = n;
  for (var i = 2; i < n; i++) {
    while (remainder%i == 0) {
      divisors = divisors.concat(divisors.map(a => a*i));
      remainder /= i;
      //console.log(divisors);
    }
  } // unfortunately this generates all divisors, with 1 and n. 
  divisors.pop();
  return Array.from(new Set(divisors)).reduce((a,b) => a+b, 0); // convert to set and back to get rid of duplicates
}

sumAmicableNum(10000);