function longestCollatzSequence(limit) {
  const numbers = [];
  for (var i = 0; i < limit; i++) {
    numbers[i] = [i];
    var step = collatzStep(i);
    // only store chains that are not in the array, i.e. chains > limit. When the next step is already cached, we can take it from there.
    while (step >= limit) {
      numbers[i].push(step);
      step = collatzStep(step);
    }
    console.log(numbers[i])
  }

  return numbers.map(function(currentSequence, index) {
    var sequencePart = currentSequence;
    var length = sequencePart.length;
    var lastNum = sequencePart[sequencePart.length -1];
    while (lastNum > 1) {
      sequencePart = numbers[collatzStep(lastNum)];
      length += sequencePart.length;
      lastNum = sequencePart[sequencePart.length-1];
    }
    return [length, index];
  }).sort((a,b) => b[0]-a[0])[0][1];
}

function collatzStep(n) {
  if (n%2 == 0) {
    return n/2;
  } else {
    return 3*n + 1;
  }
}

longestCollatzSequence(100000);
