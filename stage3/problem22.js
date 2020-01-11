function namesScores(arr) {
   return arr.sort().map((item, pos) => score(item)*(pos+1)).reduce((a,b) => a+b);
}

function score(str) {
  return str.split("").map(a => a.charCodeAt()-64).reduce((a,b) => a+b); 
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);