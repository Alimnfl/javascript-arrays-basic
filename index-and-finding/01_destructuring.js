const numbers = [10, 20, 30, 40, 50];

// Bad Use Case
const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

// Best Use Case using Destructuring
// To Print the rest of the array, use spread operators (..restOfTheArray)
const [num1, num2, num3, ...restOfTheArray] = numbers;
num1; // 10
num2; // 20
num3; // 30
restOfTheArray; // [40, 50]

// Spread operators can also be used to copy an array

/*
    ! NOTE:
    * The place where you put the spread operator is important
    * If you put the spread operator in front of the new value [...oldValue, "new value"],
    * It will copying all the value first and after that adding the new value ["old value", "new value"]
    * If you put the spread operator behind of the new value ["new value", ...oldValue],
    * The new value will be added first and then the rest of the all value ["new value", "old value"]
 */

const inFront = [...numbers, 60, 70, 80, 90, 100];
console.log(inFront);

const behindNewValue = [2, 5, ...numbers];
console.log(behindNewValue);

// Example for any Array (word)
const avengers = ['Captain Marvel', 'Captain America', 'Tony Stark', 'Peter Parker'];
console.log(avengers);

// Make a copy + added new value
const newAvengers = [...avengers, 'Hawkeye', 'Alex', 'Aldi Taher'];
console.log(newAvengers);

// Change the newAvengers members because Captain America and Peter Parker was Died.
newAvengers[1] = 'Wakwaw';
newAvengers[2] = 'Mang Ocid';
console.log(newAvengers);

// What if is an array of object? well... no problem!
const userNames = [
  {
    id: 1,
    name: 'Jack Sparrow',
  },
  {
    id: 2,
    name: 'Alimnfl',
  },
  {
    id: 3,
    name: 'Razar',
  },
];

console.log(userNames);

// Using spread operator to copy the array of object
// We can also add a new object by adding a new object after the spread operator
const addUserNames = [
  ...userNames,
  {
    id: 4,
    name: 'Chrollo Lucifer',
  },
];
console.log(addUserNames);

// Notice I write Raza names wrong, we can change it by changing the name reference of the object
console.log(addUserNames[2]);
addUserNames[2].name = 'Raza';
console.log(addUserNames[2]);
