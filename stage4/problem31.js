const coins = [1, 2, 5, 10, 20, 50, 100, 200];

// using dynamic programming
function coinSums(n) {
  const arr = [new Array(n+1).fill(1,0,n+1),[1],[1],[1],[1],[1],[1],[1]];
  console.log(arr[0]);
  for (var i = 1; i < coins.length; i++) {
    for (var target = 1; target <= n; target++) {
      arr[i].push(arr[i-1][target])
      if (coins[i] <= target) {
        arr[i][target] += arr[i][target-coins[i]]
      }
    }
  console.log(arr[i])
  }
  return arr[coins.length-1][n];
}

coinSums(50);