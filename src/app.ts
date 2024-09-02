// const userName = 'Max';
// // userName = 'Maryor'; 
// let age = 30;

// age = 29;

// function add(a: number, b: number){
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     var isOld = true;
// }

// console.log(isOld)
// console.log(result);

// const add = (a: number, b: number = 10) =>  a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(13));

// console.log(add(10,40));

const hobbies = ['Sport', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
    firstName: 'Maryor',
    age: 30
};

const copiedPerson = { ...person};

const add = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(2, 3, 6, 19, 5.3);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age)