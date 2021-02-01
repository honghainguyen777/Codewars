// The Office II - Boredom Score
function boredom(staff) {
  let scores = {accounts: 1, finance: 2, canteen: 10, regulation: 3, trading: 6, change: 6, IS: 8, retail: 5, cleaning: 4, "pissing about": 25}
  let sum = 0;
  for (item in staff) {
    sum += scores[staff[item]];
  }
  return sum <= 80 ? "kill me now" : sum >= 100 ? "party time!!" : "i can handle this";
}

boredom({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' })


// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'