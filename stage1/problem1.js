function multiplesOf3and5(number) {
    // 3 5 6 9 10 12 15 18 20 21
    // Diff: (2) 2 1 3 1 2 3 3 - 2 1 ...
    var multiple = 0; // needs to start at 0, actually it should be +1
    var diffs = [2, 1, 3, 1, 2, 3, 3];
    var n = 3;
    var sum = 0;
    while (n < number) {
        sum += n;
        n += diffs[(multiple++)%diffs.length]; 
    }
    return sum;
}

multiplesOf3and5(1000);