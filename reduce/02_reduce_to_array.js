const numbers = [1, 2, 3, 4, 5];

let arr = [];
for (const number of numbers) {
  arr = [...arr, number];
}

console.log(arr); //[1, 2, 3, 4, 5]

// Using .reduce()
const useReduce = numbers.reduce((arr, value) => [...arr, value], []);
console.log(useReduce);

const reduceRight = numbers.reduceRight((arr, number) => [...arr, number], []);
console.log(reduceRight);

const groups = [
  [3, 4], //4, 4, 4
  [3, 10],
  [3, 15],
];

const countValue = groups.reduce((arr, [count, value]) => [...arr, ...Array(count).fill(value)], []);
console.log(countValue);
