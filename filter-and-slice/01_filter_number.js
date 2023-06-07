const numbers = [-50, -30, -10, 10, 40, 50];

/*
 * Filter have 3 arguments
 * v : value, i : index, a : original array
 */

// Filter positive value
const positive = numbers.filter((v) => v > 0);
console.log(positive); // this value is [10, 40, 50]

// .filter() returns an array, so we can map, filter or reduce it again
const positiveUnder50 = numbers.filter((v) => v > 0).filter((v) => v < 50);
console.log(positiveUnder50);

// Add 10 to each positive value under 50 in positiveUnder50
const addTen = positiveUnder50.map((v) => v + 10);
console.log(addTen);

// Filter Negative Value
const negative = numbers.filter((v) => v < 0);
console.log(negative);

// Change Negative to Positive
const negativeToPositive = negative.map((v) => ~v + 1);
console.log(negativeToPositive);

// Filter a number that have the next number + 1
// 9 + 1 = 10 true, 11 + 1 = 12 false (the array doesn't have number 12)
const num = [9, 10, 11, 13, 15, 17, 18];

const hasNext = num.filter((v, _, a) => a.includes(v + 1));
console.log(hasNext);

// Filter a number that have the next number + 2
// 11 + 2 = 13 true, 15 + 2 = 17 false (the array doesn't have number 12)
const num2 = [11, 13, 15, 19, 20, 21];

const hasNext2 = num2.filter((v, _, a) => a.includes(v + 2));
console.log(hasNext2);
