"use strict";

// ? OOP

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};
const jonh = Object.create(solder);

// const jonh = {
//     health: 100
// };

// jonh.__proto__ = solder; // ! застаріле прото

// Object.setPrototypeOf(jonh, solder); // ! сучасне використання

//jonh.sayHello();

//console.log(jonh.health);


// * практика з об'єктами

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        this.count = +prompt("Скільки фільмів ви вже подивились?",'');
        
        while(this.count == '' || this.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Скільки фільмів ви вже подивились?",'');
        }
        console.log(this.count);
    },
    showMyDB: (privat) => {
        if(privat === false){
            console.log(personalMovieDB);
        }
        else{
            console.log("Error db is privat");
            
        }
    },
    toggleVisibleMyDB: function(){
        if(this.privat === false){
            this.privat = true;
            console.log("now it's privat");
        }
        else {
            this.privat = false;
            console.log("now it's public");
        }
    },
    // writeYourGenres: function() {
    //     let question = prompt("","");
    //     console.log(question);
    // }
   writeYourGenres: function(){
    //    let questionAboutFilm = [];
        for(let i = 0; i < 3; i++){
            
           let questionAboutFilm = prompt(`Ваш улюблений жанр під номером ${i + 1}`,"");
            if(questionAboutFilm == null || questionAboutFilm == ""){
                console.log("error");
                i--;
            }
            else{
                personalMovieDB.genres[i] = questionAboutFilm;
            }
        }
       personalMovieDB.genres.forEach(function(item,index){
            console.log(`Любимый жанр #${index + 1} - это ${item}`)
        })
    }

};
// personalMovieDB.start();


// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB);

// personalMovieDB.toggleVisibleMyDB();



// ? практика

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    
    let st1 = [],
        st2 = [],
        st3 = [],
        rest = [];
    for(let i = 0; i < arr.length; i++){
      if(i < 3){
        st1.push(arr[i]);
      }
      else if(i < 6){
        st2.push(arr[i]);
      }
      else if(i < 9){
        st3.push(arr[i]);
      }else{
        rest.push(arr[i]);
      }

    }
console.log(st1,st2,st3, `Оставшиеся студенты: ${rest === 0 ? '-' : '-'}`);
}
sortStudentsByGroups(students);