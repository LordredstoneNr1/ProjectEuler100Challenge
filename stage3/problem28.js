function spiralDiagonals(n) {
  var sum = 0;
  var increase = 0;
  var number = 1;
  // first diagonal
  for (var i = 0; i < n; i++) {
    //console.log(number);
    increase+= 2;
    sum += number;
    number += increase;
  }
  // second diagonal with 1 again
  number = 1;
  increase = 0;
  for (var i = 0; i < n; i++) {
    if (i%2 == 0) {
      increase+= 4;
    }
    //console.log(number);
    sum += number;
    number += increase;
  }
  return sum-1;
}

spiralDiagonals(1001);