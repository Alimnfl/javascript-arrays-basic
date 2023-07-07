const numbers = [10, 20, 30, 40, 50, 60];

// make a copy
console.log(Array.from(numbers));
console.log(Array.from(numbers, (v) => v * 10));
