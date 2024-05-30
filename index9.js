"use strict";

const arr = [61, 32, 3, 6, 78];
arr.sort(compareNumber);
console.log(arr);

function compareNumber(a, b) {
    return a-b;
}

// arr[99] = 0;
// arr.pop();
// arr.push(10);
 

// * переббір масивів
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} всередині масива ${arr}`);
// });

// console.log(arr.length);
// console.log(arr);

// * переббір масивів
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let value of arr){
//     console.log(value);
// }


// const str = prompt("","");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));
// console.log(products);