"use strict";

let a = 5,
    b = a;

b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //! передаєтсья силка на об'єкт - передача по силці

// copy.a = 10;
// console.log(copy);
// console.log(obj);

function copy(mainObj) { // ! копіює об'єкт
    let objCopy = {};

    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = (Object.assign({}, add));

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[0]=1;
// console.log(oldArray);
// console.log(newArray);

const video = ['youtube', 'video', 'rutube'],
      blogs = ['wordpress', 'livejornal', 'blogger'],
      internet = [...video, ...blogs, 'inst', 'facebook'];
    //   console.log(internet);

function numb(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 7, 4];

// numb(...num);

const array = ["a", "b", "c"];

const newAray = [...array];

const q ={
    one: 1,
    two: 2
};

const newObj = {...q};

// console.log(newObj);
// console.log(q);

// const colors = ['red', 'green', 'blue'];
// const [firstColor, secondColor] = colors;

// console.log(secondColor);

// const person = {

//     name: 'John',
  
//     age: 30,
  
//     city: 'New York'
  
//   };
//   const { name, age, city } = person;

//   console.log(city);

//! деструктуризація

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan){
        const {languages} = plan.skills;
        const {age} = plan;
        let result = `Мне ${age} и я владею языками: `;
        languages.forEach(function(item){
            result+=`${item.toUpperCase()} `;    
        });
        // for(let key of languages){
        //     result += key.toUpperCase();
        // }
        console.log(result);
        // return `Мне ${age} и я владею языками: `;
    }
};

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
// showExperience(plan);
function showProgrammingLangs(plan) {
    // let result = "";
    // for(let [key,value] of Object.entries(plan.skills.programmingLangs)){
    //     result+=`Язык ${key} изучен на ${value}\n`;
    // }
    // return(result);
     let result = "";
    const {programmingLangs} = plan.skills;
    for(let key in programmingLangs){
         result+=`Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return(result);
}
// showProgrammingLangs(plan);

const family = [];

function showFamily(arr) {
    if(arr.length == 0)return "Семья пуста";
    let result = "Семья состоит из: ";
    for(let key of family){
        
        result+=`${key} `
    }
    console.log(result);
}   
showFamily(family);
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for(let key of arr){

        console.log(`${key.toLowerCase()}`);
    }
    
    arr.forEach(function(item){
        
        console.log(`${item.toLowerCase()}`);
    });
}

// standardizeStrings(favoriteCities);



const someString = 'This is some strange string';

function reverse(str) {
    let res = str.split("").reverse().join("");
    // let size = 1;
    // for(let i = 0; i< str.length; i++){
    //     res+= str[i+str.length-size]; 
    //     size+=2;
    //     // console.log(size);
    //     // console.log(str[i+str.length-2]);
    // }
    // str = res;
    console.log(res);
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    
}