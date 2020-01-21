function pandigitalProducts() {
  var res = new Set();
  for (var i = faculty(4); i < faculty(9); i++) {
    checkProducts(lexicographicPermutations(i), res);
  }
  console.log(...res);
  return Array.from(res).reduce((a,b) => (a+b), 0);
}

// this checks every single product by inserting * and = into the number.
function checkProducts(n, res) {  
  //You could optimize the loops here, but eh.
  // Edit: You had to optimize it, you fool.
  for (var i = 1; i < 5; i++) { // i is the length of the multiplicant
    for (var j = 4-i; j < 6-i; j++) { // j is the length of the multiplier
      const f1 = Number.parseInt(n.toString().slice(0,i));
      const f2 = Number.parseInt(n.toString().slice(i, i+j));
      const product = Number.parseInt(n.toString().slice(i+j));
      if (f1*f2 == product) {
        res.add(product);
        console.log(product);
      }
    }
  }
}

//adaptation of problem 24 to work without 0. It generates all pandigital numbers.
function lexicographicPermutations(n) {
  var max = 8; 
  var available = [1,2,3,4,5,6,7,8,9];
  var result = 0;
  while (max > 0) {
    var digit = Math.floor(n / faculty(max));
    result += available[digit] * 10**max;
    available = available.copyWithin(digit, digit+1).slice(0, -1);
    n %= faculty(max);
    max--;
  }
  result += available[0];
  return result;
}

function faculty(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

pandigitalProducts();