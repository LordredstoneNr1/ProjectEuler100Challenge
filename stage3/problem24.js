function lexicographicPermutations(n) {
  var max = 9; // 0 to 9 are 10 numbers, but starting with 9 seems better
  var available = [];
  for (var i = 0; i <= max; i++) {
    available[i] = i;
  }
  var result = 0;
  while (max > 0) {
    var digit = Math.floor(n / faculty(max));
    result += available[digit] * 10**max;
    available = available.copyWithin(digit, digit+1).slice(0, -1);
    n %= faculty(max);
    max--;
  }
  result += available[0]; // add last one which is not handled by the loop
  console.log(result);
  return result;
}


function faculty(n) {
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

lexicographicPermutations(999999);