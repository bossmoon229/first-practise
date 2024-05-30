"use strict";

const options = {
    name: "jhkj",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red",
    },
    makeTest: function() {
        console.log("Test");
    }
};
 
// console.log(Object.keys(options));
options.makeTest();

const {bg, border} = options.colors;

console.log(bg);

// delete options.name; 
// console.log(options);
// let counter = 0;
// for(let key in options){
//     if(typeof(options[key]) === 'object'){
//         for(let i in options[key]){
//             console.log(`Це ${i}, має значення ${options[key][i]}`);

//             // counter++;
//         }
//     }else{
        
//         console.log(`Свойство ${key}, має значення ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);
