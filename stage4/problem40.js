function champernownesConstant(n) {
  var product = 1;
  const arr = [];
  var fill = 0;
  while (arr.length <= n) {
    arr.push(...(fill++).toString());
  }
  for (var i = 0; i <= Math.ceil(Math.log10(n)); i++) {
    product *= arr[10**i];
  }
  return product;
}

champernownesConstant(100);
