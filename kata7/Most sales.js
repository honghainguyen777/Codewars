// Most sales
function top3(products, amounts, prices) {
  return products.map((el, index) => ({index: index, el: el})).sort((a, b) => amounts[b.index] * prices[b.index] - amounts[a.index] * prices[a.index] || a.index - b.index).map(el => el.el).slice(0, 3);
}

// top3(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124])
// top3(["Computer", "Cell Phones", "Vacuum Cleaner"], [3, 24, 8], [199, 299, 399])
top3([ 'Cell Phones',
  'Vacuum Cleaner',
  'Computer',
  'Printer',
  'TVs',
  'Laptops',
  'Tablets',
  'Chargers',
  'Speakers',
  'Games',
  'Music CDs',
  'Radios',
  'Drones',
  'Scooter',
  'Keyboards',
  'Mouses' ], [ 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ], [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20 ])

// You work in the best consumer electronics corporation, and your boss wants to find out which three products generate the most revenue. Given 3 lists of the same length like these:

// products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
// amounts: [3, 24, 8]
// prices: [199, 299, 399]
// return the three product names with the highest revenue (amount * price).

// Note: if multiple products have the same revenue, order them according to their original positions in the input list.