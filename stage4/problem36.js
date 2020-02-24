function doubleBasePalindromes(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    if (isPalindrome(i.toString(10)) && isPalindrome(i.toString(2))) {
      sum += i;
    }
  }
  console.log(sum);
  return sum;
}

function isPalindrome(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) != (str.charAt(str.length-1-i))) {
      return false;
    }
  }
  return true;
}

doubleBasePalindromes(1000000);
