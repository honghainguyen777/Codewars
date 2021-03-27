// Human readable duration format

// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// function formatDuration (seconds) {
//   const timeSegments = {year: 365*24*60*60, day: 24*60*60, hour: 60*60, minute: 60, second: 1};
//   let result = "";
//   while(seconds > 0) {
//     for (time in timeSegments) {
//       if (seconds >= timeSegments[time]) {
//         const value = Math.floor(seconds/timeSegments[time]);
//         seconds -= value*timeSegments[time];
//         const isLastAndMore2Components = seconds === 0 && result !== "";
//         if (isLastAndMore2Components) result = result.substring(0, result.length - 2);
//         result += `${isLastAndMore2Components ? " and " : ""}${value} ${time}${value > 1 ? "s" : ""}${!seconds ? "" : ", "}`; 
//       }
//     }
//   }
//   return result ? result : "now";
// }
function formatDuration (seconds) {
  const timeSegments = {year: 365*24*60*60, day: 24*60*60, hour: 60*60, minute: 60, second: 1};
  let result = "";
  while(seconds > 0) {
    for (time in timeSegments) {
      if (seconds >= timeSegments[time]) {
        const value = Math.floor(seconds/timeSegments[time]);
        seconds -= value*timeSegments[time];
        result += `${value} ${time}${value > 1 ? "s" : ""}${!seconds ? "" : ", "}`; 
      }
    }
  }
  return result ? result.replace(/,([^,]*)$/," and$1") : "now";
}

// replace(/,([^,]*)$/," and$1") - > 
// /,([^,]*)$/ will match the last , $ = end of the string or line
// and ([^,]*) will captures the group of all characters after , to the end
// and $1 in the replacement string will be replaced with the 1st captured group above

// It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(36624323423)  // returns "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.