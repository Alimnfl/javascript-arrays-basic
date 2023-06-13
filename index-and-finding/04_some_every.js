const coord = [-20, 10, 100, -100, -150, 50];

// Check if a number are in the coord array
const is20InTheArray = coord.includes(20);
console.log(is20InTheArray);

const isMinus20InArray = coord.includes(-20);
console.log(isMinus20InArray);

// Check if some numbers are positive?
const isPositive = coord.some((num) => num > 0);
console.log(isPositive);

// Check if every numbers are negative?
const isEvery = coord.every((num) => num < 0);
console.log(isEvery);
