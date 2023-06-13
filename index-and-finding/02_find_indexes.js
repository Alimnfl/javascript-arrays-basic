// Find Index
const superheroes = ['Batman', 'Superman', 'Iron Man', 'Wolverine', 'Deadpool'];

// Find each superheroes
console.log(superheroes.indexOf('Batman'));
console.log(superheroes.indexOf('Superman'));
console.log(superheroes.indexOf('Deadpool'));

// write function to find index of IronMan
const findIronMan = superheroes.findIndex((name) => name === 'Iron Man');
console.log(findIronMan);
