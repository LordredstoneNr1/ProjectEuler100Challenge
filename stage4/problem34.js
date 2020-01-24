function digitFactorial() {
  // Good luck!
  var sum = 0;
  var numbers = [];
  for (var i = 10; i < factorials[9]; i++) {
    var sumDigits = 0;
    var digit = i;
    while (digit > 0) {
      sumDigits += factorials[digit%10];
      digit = Math.floor(digit / 10);
    }
    if (sumDigits == i) {
      numbers.push(i);
      sum += i;
    }
  }
  return { sum, numbers };
}

const factorials = [1, 1, 2, 6, 6*4, 2*3*4*5, 2*3*4*5*6, 2*3*4*5*6*7, 2*3*4*5*6*7*8, 2*3*4*5*6*7*8*9];

digitFactorial();
