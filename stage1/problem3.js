function largestPrimeFactor(number) {
  var factor = 2; // doesn't even need to be prime lol
  while (number > 1) {
    console.log(number);
    while (number%factor == 0) {
      number /= factor;
    }
    factor++; // no need to search for the next prime
  } 
  return factor-1; // not as elegant as I hoped
}

largestPrimeFactor(13195);
