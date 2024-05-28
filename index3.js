"use strict";

let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 
// }
// while(num <55);

// for (let i = 1; i < 20; i++){
//     if (i % 2 == 0){
//         // break;
//         continue;
//     }
//     console.log(i);
    
// }
// for (let i = 0; i < 5; i++){
    //      str += "*";
    //      console.log(str);
    // }
let str = "";
let length = 7;

for (let i = 0; i < length; i++){

    for ( let j = 0; j < i; j++){
        str+="*"
    }
    
    str += "\n";
}
console.log(str); 

//* 
//**
//***
//****
//***** 


function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for( let i = data.length; i>=1; i--){
        result[data.length - i] = data[i - 1];
    }
    // Пишем решение вот тут
    
    
    // Не трогаем
    console.log(result);
}

thirdTask();

console.log( Math.floor(7/2+1));

let res = '';
let lines = 6

for(let i = 0; i < lines; i++){

    for( let j = 0; j < lines * 2 -1; j++){
        if( i == j/2 ){
            res += "*";
        }
        else res+=" ";
    }
    res+="\n"
}

console.log(res);