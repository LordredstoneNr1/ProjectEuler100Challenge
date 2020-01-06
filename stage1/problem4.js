function largestPalindromeProduct(n) {
  var p = Math.pow(10,n)-1;
  var q = p;
  const min = 9*Math.pow(10, n-1); // technically way over the limit, but since we are looking for the largest palindrome...
  var result = 0;
  console.log(min,p);
  while (p > min) {
    q = p;
    while (q > min) {
      result = p * q;
      console.log(p, q, result)
      if (isPalindrome(result)) {
        return result;
      }
      q--;
    }
    p--;
  }
}

function isPalindrome(n) {
  return n.toString().split("").reverse().join("") == n.toString();
}

largestPalindromeProduct(3);