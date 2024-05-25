"use strict"; 

// const hamburger = 5;
// const fries = null;

// if  (hamburger && fries) {
//     console.log("i`m not hungry");

// }

// const hamburger = 3;
// const fries = 0;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
console.log(undefined && 0);
// console.log(0 && 'ds;fldsf');

// console.log(5 || 4);


// if  (hamburger === 3 && fries) {
//     console.log("all is odone");

// } else{
//     console.log("we leave");
// }



// const hamburger = 3;
// const fries = 0;
// const cola = 0;


// if  (hamburger || cola || fries) {
//     console.log("all is done");

// } else{
//     console.log("we leave");
// }



console.log(null||1);
console.log(1 || 5);
console.log(null || 5);
console.log(0 || 'ds;fldsf');

console.log(5 || 4);


// let num = 1000 ;
// (num === 50) ? console.log('ok') : console.log('not ok');
// switch (num) {
//     case 49:
//         console.log('not ok');
//         break; 
//     case 100:
//         console.log('not ok');
//         break; 
//     case 50:
//         console.log('ok');
//         break; 
//     default:
//         console.log('not now');
//         break; 
// }
// console.log( NaN || 2 || undefined );
// console.log( NaN && 2 && undefined );

console.log( NaN || 2 || undefined ); // 2
console.log( NaN && 2 && undefined ); // NaN
console.log( 1 && 2 && 3 ); // 3
console.log( !1 && 2 || !3 ); // false
console.log( 25 || null && !3 ); // false
console.log( NaN || null || !3 || undefined || 5); // 5
console.log( NaN || null && !3 && undefined || 5); // 5
console.log( 5 === 5 && 3 > 1 || 5); // 5

// * done
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     // true && cola || true && nuggets
//     //cola || nuggets
//    console.log('Done!')
// }


// * done

// let hamburger; // undefined
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//     // hamburger || cola || false || nuggets
//     //
//    console.log('Done!')
// }


let hamburger;// undefined
const fries = NaN; 
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
    //undefined || false && nuggets
    //undefined ||false
   console.log('Done!')
}
else console.log("go away")
