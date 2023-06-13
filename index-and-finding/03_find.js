const movies = ['Inception', 'Allazar', 'The Wocker', 'A Clockwork Orange'];

// Write a function to find are The Wocker in the array of movies?
const isTheWocker = movies.find((check) => check === 'The Wocker');
console.log(isTheWocker);

// Is Allazar is Good in the movies?
const isAllazar = movies.find((check) => check === 'Allazar is Good');
console.log(isAllazar); // Undefined

const names = [{ name: 'Jude' }, { name: 'The GG OM' }];

const isJude = names.find((check) => check.name === 'Jude');
console.log(isJude);

const isTheGGOM = names.find((check) => check.name === 'The GG OM');
console.log(isTheGGOM);
