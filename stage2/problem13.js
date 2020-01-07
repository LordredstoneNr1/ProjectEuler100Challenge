function largeSum(arr) {
  const digitsToPrint = 10;
  var result = [];
  var digit = 0;
  for (var i = arr[0].length-1; i >= 0; i--) { // offset zero-based string
    arr.forEach(str => digit += Number.parseInt(str.charAt(i)));
    result.push(digit%10);
    digit = Math.floor(digit / 10);
  }
  while (digit > 0) { // Overflow if there are no more digits
    result.push(digit%10);
    digit = Math.floor(digit / 10);
  }
  return Number(result.reverse().slice(0,digitsToPrint).join(""));
}

// only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];

largeSum(testNums);
