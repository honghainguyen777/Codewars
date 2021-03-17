// TGI Friday!!

// function lastDayIsFriday(initialYear, endYear) {
//   let count = 0;
//   for (let day = new Date(`${initialYear}/01/01`); day < new Date(`${endYear || initialYear }/12/30`); day.setDate(day.getDate() + 1)) {
//     if (day.getDay() === 5 && new Date(day.getTime() + 86400000).getDate() === 1) {
//       count++;
//     }
//   }
//   return count;
// }

function lastDayIsFriday(initialYear, endYear = initialYear) {
  let count = 0;
  for (let year = initialYear; year <= endYear; year++) {
    for (let month = 1; month <= 12; month++) {
      if (new Date(year, month, 0).getDay() === 5) count++
    }
  }
  return count;
}

lastDayIsFriday(1901, 2000); //171


// We all love fridays, and even better if it is the last day of the month!

// In this kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.

// Your work is to return the number of times a month ends with a Friday.

// If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!

// For example, between 1901 and 2000, a month ends on Friday 171 times.