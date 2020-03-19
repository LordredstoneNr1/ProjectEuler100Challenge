function triPentaHexa(n) {
  while (!n.isHexa()) {
    n++;
  }  
  // H(n) + 4*n + 1 = H(n+1)
  // var step = 4 * (H^-1(n)) + 1
  var step = Math.sqrt(1+ 8*n) + 2;
  // generating only hexagonal numbers at this point
  while (!n.isTri() || !n.isPenta()) {
    n += step;
    step += 4;
    }
  return n;
}

Number.prototype.isTri = function () {
  // x**2 / 2 + x/2 - n = 0
  return Number.isSafeInteger(-1/2 + Math.sqrt(1/4 + 2*this));
}

Number.prototype.isPenta = function () {
  // 3/2 x**2 - 1/2 x - n = 0
  return Number.isSafeInteger(1 / 6 + (Math.sqrt(1/36 +2*this/3)));
}

Number.prototype.isHexa = function () {
  // 2 x**2 - x - n = 0
  return Number.isSafeInteger(1/4 + Math.sqrt(1/16 + this/2));
}

triPentaHexa(40756);