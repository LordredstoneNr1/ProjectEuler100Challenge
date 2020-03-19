function pentagonNumbers() {
  var a = 1;
  while (true) {
    const pa = a * (3*a - 1) / 2;
    for (var b = 1; b < a; b++) {
      const pb = b * (3*b - 1) / 2;
      if ((pa - pb).isPentagonal() && (pa + pb).isPentagonal()) {
        return pa - pb;
      }
    }
    a++;
  }
  return -1;
}

Number.prototype.isPentagonal = function () {
  // stupid bug: "2/3*this" is not the same as "2*this / 3"
  return Number.isSafeInteger(1 / 6 + (Math.sqrt(2*this/3 + 1/36)));
}

pentagonNumbers();