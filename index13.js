"use strict";

// let number = 5; debugger;

// function logNumber() {
//     let number = 4; debugger;
//     console.log(number);
//     console.log(number);
// }


// number = 6;

// logNumber(); debugger;


function createCounter() {
    let counter = 1;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
    // return counter;
}

const increment = createCounter();

const c1 = createCounter()();
const c2 = increment();
const c3 = createCounter()();
const c4 = increment();
// const c4 = increment();

// console.log(c1, c2 ,c3,c4);


// let a = 3
function addTwo(x) {
   let ret = x + 2
   return ret
 }
//  let b = addTwo(a)
// console.log(b); 



function sayHi() {
    console.log("Hi");
  }
  
//   console.log(sayHi.length);

// const result = getSum(5, 6);
// const getSum = function(a, b) {
//     return a + b;
// }

// console.log("a" < "b");


function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    console.log( `${first} ${eng}`);
}
 
// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})

// let x = 5; 
// console.log( x++ );

let y = 1; 
let x = y = 2; 
// console.log(x);

// console.log("1"[0]);


let a = [1, 2, 3];
let b = [1, 2, 3];

// console.log(a == b);
// console.log(+"Infinity");
// console.log(0 || "" || 2 || undefined || true || false );

// ? пустий масив це пустий рядок

// console.log(typeof([]  + false)); //! якщо до любого рядка додаємо щось, буде ряодок

// console.log([] + 1 + 2);

// console.log('1'[0]);

// console.log(2 && 1 && null && 0 && undefined);

// console.log(!!(1 && 2));
// console.log((1 && 2));

// console.log( null ||( 2 && 3) || 4 );

// console.log(1 && 2);

console.log(typeof(+"Infinity"));