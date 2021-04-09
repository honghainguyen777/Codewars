// Meandering Array An array of integers - hackerrank

function meanderingArray(unsorted) {
    const sorted = unsorted.sort((a, b) => a - b);
    let smallIndex = 0;
    let largeIndex = sorted.length - 1;
    let isNextLarge = true;
    let result = [];
    for (let i = 0; i < sorted.length; i++) {
        if (isNextLarge) {
            result.push(sorted[largeIndex]);
            largeIndex--;
            isNextLarge = false;
        } else {
            result.push(sorted[smallIndex]);
            smallIndex++;
            isNextLarge = true;
        }
    }
    return result;
}