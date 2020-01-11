function countingSundays(firstYear, lastYear) {
  const months = [31, "", 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const regularLeap = 28;
  const leapLeap = 29;

  var sum = 0;
  var offset = 1; // 1 Jan 1900 was a monday
  var year = 1900;

  while (year <= lastYear) { 
    for (var i = 0; i < months.length; i++) {
      if (year >= firstYear && offset%7 == 0) {
        sum++;
        console.log(year + ":", i);
      }
      if (months[i] != "") {
        offset += months[i];
      } else {
        offset += isLeapYear(year) ? leapLeap : regularLeap;
      }
    }
    year ++;
  }

  return sum;
}

function isLeapYear(i) {
  return (!(i%100 == 0 && !i%400 == 0) && i%4 == 0)
}

countingSundays(1943, 1946);
