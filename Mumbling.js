// Make a function that works as follows:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let acc = "";
	for (let i=0; i<s.length; i++) {
    acc += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
    console.log(s[i]);
  }
  return acc.slice(0, -1);
}

accum("ZpglnRxqenU")
