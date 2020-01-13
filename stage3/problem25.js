function digitFibonacci(n) {
  var fib1 = 1;
  var fib2 = 1;
  var count = 3;
  while (getLength(fib1+fib2) < n) {
    if (count % 2 == 0) {
      fib2 += fib1;
    } else {
      fib1 += fib2;
    }
    count++;
  }
  console.log(count);
  return count;
}

function getLength(n) {
  return n.toString().length;
}

digitFibonacci(20);