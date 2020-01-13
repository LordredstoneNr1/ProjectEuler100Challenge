function reciprocalCycles(n) {
  var max = 0;
  var maxcycle = 1;

  for (var i = 2; i < n; i++) {
    const cycle = checkCycle(i);
    if (cycle > maxcycle) {
      max = i;
      maxcycle = cycle;
    }
  }
  return max;
}

function checkCycle(n) {
  var i = 0;
  const digits = [ [], [], [], [], [], [], [], [], [], [] ];
  var digit = 0; // first will be 1/x with x > 1 so definitely 0
  var remainder = 1;
  while (remainder != 0 && digits[digit].findIndex(checkDuplicate(remainder)) == -1) {
    digits[digit].push({"remainder": remainder, "i": i})
    remainder *= 10;
    digit = Math.floor(remainder / n);
    remainder = (remainder - digit * n);
    i++;
  }
  if (remainder == 0) {
    return 0;
  }
  return i - digits[digit].find(checkDuplicate(remainder)).i;
}

function checkDuplicate(remainder) {
  return (value => value.remainder == remainder);
}

reciprocalCycles(1000);