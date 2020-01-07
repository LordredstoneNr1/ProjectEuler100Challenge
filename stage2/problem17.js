const smalls = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

const meds = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]


function numberLetterCounts(limit) {
  var letters = 0;
  for (var i = 1; i <= limit; i++) {
    letters += countFor(generate(i));
  }
  return letters;
}

function countFor(str) {
  return str.split(" ").map(a => a.length).reduce((a,b) => a+b);
}

function generate(i) {
  // x thousand 
  if (i > 999) {
    return generate(Math.floor(i/1000)) + " thousand " + generate(i%1000);
  } else {
    if (i > 99) {
      return generate(Math.floor(i/100)) + " hundred" + ( (i%100 > 0) ? " and " + generate(i%100) : "");
    } else {
      if (i < 20) {
        return smalls[i];
      } else {
        return meds[Math.floor(i/10)] + " " + smalls[i%10];
      }
    }
  }

}

numberLetterCounts(5);