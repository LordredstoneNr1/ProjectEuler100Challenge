function fiboEvenSum(n) {
  var odd1 = 1;
  var even = 2;
  var odd2 = 0;
  var sum = 0;
  var i = 0;

  // (even < n) would have been much easier, no need for the i-th term. Just consider terms < n
  while (i++ <= (n-2)/3) { 
    sum += even;
    odd2 = odd1 + even;
    odd1 = even + odd2;
    even = odd2 + odd1;
  }
  return sum;
}

fiboEvenSum(10);
