function powerDigitSum(exponent) {
  // I thought this was a one-liner: Math.pow().toString().split().reduce() but it gets too high and converts into e-notation
  const base = 10;
  const arr = [1];
  for (var e = 0; e < exponent; e++) {
    var keep = 0;
    for (var i = 0; i < arr.length; i++) {
      arr[i] *= 2;
      arr[i] += keep;
      keep = 0;
      if (arr[i] >= base) {
        keep = Math.floor(arr[i] / base);
        arr[i] %= base;
      }
    }
    if (keep != 0) {
      arr.push(keep);
    }
  }
  return arr.reverse().reduce((a,b) => a + b); // technically reversing is not needed since the sum will be the same. I like to display the "correct" result though.
}
console.log(powerDigitSum(128));