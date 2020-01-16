function distinctPowers(n) {
  const powers = new Set();
  for (var a = 2; a <= n; a++) {
    for (var b = 2; b <= n; b++) {
      powers.add(a**b);
    }
  }
  return powers.size;
}

distinctPowers(30);