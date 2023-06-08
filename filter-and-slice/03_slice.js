const villains = ['Joker', 'Green Goblin', 'Sandman', 'The Riddle', 'Gua Hantu'];

// Bad Approach
const firstThreeVillain = villains.filter((_, i) => i >= 0 && i < 3);
console.log(firstThreeVillain); // [ 'Joker', 'Green Goblin', 'Sandman' ]

// Good Approach
const goodFirstThree = villains.slice(0, 3);
console.log(goodFirstThree); // [ 'Joker', 'Green Goblin', 'Sandman' ]

// Slice can also make a copy of an array
const newVillains = villains.slice();
console.log(newVillains);

// Slice can start from index
const startFromIndexTwo = villains.slice(2);
console.log(startFromIndexTwo);
