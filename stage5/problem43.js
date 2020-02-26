function substringDivisibility() {
  const start = 0; 
  const finish = 9;
  const numbers = new PandigitalNumber(start, finish);
  const divisors = [2, 3, 5, 7, 11, 13, 17];
  const len = (finish - start - divisors.length + 1);
  var results = [];
  for (const n of numbers.getIterator()) {
    var divisible = true;
    for (var i = 0; divisible && i < divisors.length; i++) {
      const part = n.slice(i+1, (i+1)+ len);
      if (Number(part) % divisors[i] != 0) {
        divisible = false;
      }
    }
    if (divisible) {
      results.push(n);
    }
  }
  return results;
}

class PandigitalNumber {

  constructor(start, end) {
    if (start > end) {
      throw "start > end";
    }
    this.start = start;
    this.end = end;
    this.possibleNumbers = end - start;
  }

  get(index) {
    var result = "";
    var available = Array.from(takeRange(this.start, this.end, naturalNumbers()));
    var i = available.length-1;
    while (i > 0) {
      var digit = Math.floor(index / Math.faculty(i));
      result += available[digit];
      available = available.copyWithin(digit, digit+1).slice(0, -1);
      index %= Math.faculty(i);
      i--;
    }
    result += available[0];
    return result;
  }

   *getIterator () {
    var index = 0;
    while (index < Math.faculty(this.possibleNumbers + 1)) {
      yield this.get(index++);
    }
  }
}

Math.faculty = function (n) {
  if (n < 0) {
    throw "Faculty Argument must not be negative";
  }
  var result = 1;
  for (var i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function * naturalNumbers() {
  var num = 0; // need to include 0 here even though it's not technically a "natural" number
  while (true) {
    yield num++;
  }
}

function * takeRange(start, end, generator) {
  var index = 0;
  while (index <= end) {
    const item = generator.next();
    if (index >= start) {
      yield item.value;
    }
    index++;
  }
  return;
}

substringDivisibility();