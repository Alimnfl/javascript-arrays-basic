const firstArray = [10, 20, 30];
const seccondArray = [40, 50, 60];

console.log(firstArray.concat(seccondArray));
console.log(firstArray.concat(seccondArray).map((v) => v * 100));

// With Spread operator
const withSpread = [...firstArray, ...seccondArray].map((v) => v * 2);
console.log(withSpread);
