function digitCancellingFractions() {
  var results = [];
  for (var denominator = 11; denominator < 100; denominator++) {
    for (var numerator = 10; numerator < denominator; numerator++) {
      if (checkFraction(numerator, denominator)) {
        results.push([numerator, denominator]);
      }
    }
  }
  var product = 1; // could use a reduction here I guess, but it doesn't work much better or simpler.
  results.forEach(a => product = product * a[1] / a[0]);
  return product;
}

function checkFraction(num, den) {
  const duplicateDigit = getDuplicate(num, den);
  if (duplicateDigit != 0) {
    const adjustedNum = (num % 10 == duplicateDigit) ? Math.floor(num / 10) : (num % 10);
    const adjustedDen = (den % 10 == duplicateDigit) ? Math.floor(den / 10) : (den % 10);
    if ( (Number.parseFloat(adjustedNum.toString()) / adjustedDen) == (Number.parseFloat(num.toString()) / den) ) {
      return true;
    }
  }
  return false;
}

function getDuplicate(num, den) {
  for (var candidate = 1; candidate < 10; candidate++) {
    if (num.toString().includes(candidate.toString()) && den.toString().includes(candidate.toString()) ) {
      return candidate;
    }
  }
  return 0;
}


digitCancellingFractions();
