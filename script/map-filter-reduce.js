"use strict";

const texts = ['one', 'two', 'three', 'four', 'five'];

let count = 0;
const modifyTexts = texts.map(text => { 
    return `${++count} ${text}`
});

console.log(modifyTexts); // [ '1 one', '2 two', '3 three', '4 four', '5 five' ]

const numbers = modifyTexts.map( text => parseInt(text));
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

const filterNumbers = numbers.filter( num => num >= 3 && num <= 10);
console.log(filterNumbers); // [ 3, 4, 5 ]

const sumNumbers = filterNumbers.reduce( (sum, num) => sum + num);
console.log(sumNumbers); // 12

const objectsArray = texts.map( text => ({'number' : text}));
console.log(objectsArray);

// [
//     { number: 'one' },
//     { number: 'two' },
//     { number: 'three' },
//     { number: 'four' },
//     { number: 'five' }
//   ]
  