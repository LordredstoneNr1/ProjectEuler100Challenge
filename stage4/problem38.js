function pandigitalMultiples() {
  var max = 0;
  for (var n = 2; n <= 9; n++) { 
    for (var base = 1; base < 10**(9/n); base++) {
      // Concatenation starts here
      var result = "";
      for (var i = 1; i <= n; i++) {
        result += base*i;
      }
      if (result.isPandigital()) {
        if (Number(result) > max) {
          max = Number(result);
        }
      }
    }
  }
  return max;
}

String.prototype.isPandigital= function () {
  if (this.length != 9) {
    return false;
  }
  const digits = new Set(this.split("").map(a => Number(a)));
  return digits.size == 9 && !digits.has(0); 
}

pandigitalMultiples();
