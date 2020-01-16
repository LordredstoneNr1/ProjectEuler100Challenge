function digitnPowers(n) {
  var sum = -1; // start with -1 to catch 1
  for (var i = 0; i < 10**(n+1); i++) { // there is one with 6 digits but still works for power 5
    if ( (i == i.toString().split("").reduce((a,b) => a + b**n, 0))) {
      sum += i;
    }
  }
  return sum;
}

digitnPowers(5);
