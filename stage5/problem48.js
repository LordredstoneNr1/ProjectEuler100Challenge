function selfPowers(power, lastDigits) {
  var result = new Array(lastDigits).fill(0);

  for (var i = 1; i <= power; i++) {
    result = add(result, powerSqmp(i, toNumberArray(i, lastDigits)));
    console.log(result);
  }
  return result.reduce(function (res, digit, i) {
    return res + digit * 10**i; // sum it up ltr
  },0);
}

// square and multiply
function powerSqmp(n, arr) {
  if (n == 1) {
    return new Array(...arr);
  }
  if (n % 2 == 0) { // square
    return powerSqmp(n/2, multiply(arr, arr));
  } else { // multiply
    return multiply(powerSqmp(n-1, arr), arr);
  }
}

function multiply(arr1, arr2) {
  var res = new Array(arr1.length).fill(0);
  for (var i = 0; i < arr1.length; i++) {
    const copy = new Array(...arr1);
    copy.reverse(); 
    for (var j = 0; j < i; j++) {
      copy.shift();
      copy.push(0);
    }
    copy.reverse();
    res = add(multiplySingle(arr2[i], copy), res);
  }
  return res;
}

function multiplySingle(n, arr) {
  const res = new Array(arr.length);
  var carryOver = 0;
  for (var i = 0; i < arr.length; i++) {
    const digit = arr[i] * n + carryOver;
    carryOver = Math.floor(digit / 10);
    res[i] = digit % 10;
  }
  return res;
}

function add(arr1, arr2) {
  var carryOver = 0;
  const res = new Array(arr1.length);
  for (var i = 0; i < arr1.length; i++) {
    const digit = arr1[i] + arr2[i] + carryOver;
    carryOver = Math.floor(digit / 10);
    res[i] = digit % 10;
  }
  return res;
}

function toNumberArray(n, length) {
  n %= 10**length;
  const res = new Array(length).fill(0);
  n.toString().split("").reverse().forEach((number, i) => res[i] = Number(number));
  return res;
}

console.log(selfPowers(10, 3))
//selfPowers(1000, 10);
