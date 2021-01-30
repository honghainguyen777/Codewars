// function nextId(ids){
//   let sortedIDs = [...new Set(ids)].sort((a,b ) => a - b);
//   // method 1
//   for (let i=0; i<= sortedIDs[sortedIDs.length-1]; i++) {
//     if (i !== sortedIDs[i]) return i;
//   }
//   return sortedIDs[sortedIDs.length-1] + 1;
// }

// shorter version
function nextId(ids){
  let x = 0;
  for (let i of ids) {
    if (!ids.includes(x)) break;
    x++;
  }
  return x
}

// // best version in codewars
//  function nextId(ids){
//   var x = 0;
//   while (ids.includes(x)) x++;
//   return x;
// }

nextId([0,1,2,3,5])

// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!