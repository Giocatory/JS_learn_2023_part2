'use strict';

const name = 'Mikhail';
const age = 35;
function display() {
    return `${this.name} age is ${this.age}`;
}

const person = {name, age, display};

console.log(
    JSON.stringify(person)
); // {"name":"Mikhail","age":35}

console.log(person); // { name: 'Mikhail', age: 35, display: [Function: display] }
console.log(person.display()); // Mikhail age is 35