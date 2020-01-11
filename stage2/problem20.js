function sumFactorialDigits(n) {
  var result = [1];
  var digit = 0;
  for (var factor = 1; factor <= n; factor++) { 
    for (var i = 0; i < result.length; i++) {
      digit += result[i] * factor;
      result[i] = digit%10;
      digit = Math.floor(digit / 10);
    } 
    while (digit > 0) { // Overflow if there are no more digits
        result.push(digit%10);
        digit = Math.floor(digit / 10);
    }
  }
  
  return result.reverse().reduce((a,b) => a+b);
}

sumFactorialDigits(100);