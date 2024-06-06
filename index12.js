"use strict";

function helloWorld() {
    console.log("Hello");
}

// helloWorld();

function sayHi() {
    console.log("say HI!");
}

//  sayHi();

const arr = [1, 23, 91, 34],
      sorted = arr.sort(compareNumb);
 function compareNumb(a,b){
    return a-b;
 }
 
//  console.log(sorted);

// ? Динамічна типізація

// * To String що завгодно перетворити в рядок
// ! 1)

console.log(typeof(String(null)));
console.log(typeof(String(4)));

// ! 2) конкатинація

console.log(typeof(null + ""));

const num = 5;

console.log("htttps://insta.com//" + num);

const fontSize = 26 + "px";

// * To Number що завгодно перетворити в число

// ! 1)

console.log(typeof(Number('4')));

// ! 2)

console.log(typeof(Number( + '5')));

// ! 3)

console.log(typeof(parseInt("15px", 10)));


// let answer = +prompt("hello", "");


// * To Boolean

// ! 0, "", undefined, null, NaN; 

// ! 1) спосіб логічних перетворень

let switcher = null;

if(switcher){
    console.log('Working...');
}

switcher = 1;

if(switcher){
    console.log('Working...');
}


// ! 2)

console.log(typeof(Boolean('4')));

// ! 3)

console.log(typeof(!!"fsdf"));

