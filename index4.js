/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


"use strict";

let numberOfFilms = +prompt("Скільки фільмів ви вже подивились?",'');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


// for(let i = 0; i < 2; i++){
//     let a = prompt("Один із останніх вашиї переглянутих фільмів?",''),
//         b = prompt("Оцініь його",'');

//         if( a!= null && b != null && a != '' && b!= '' && a.length <50){
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else{
//             console.log('error');
//             i--;
//         }
       

// }
let j = 0;
//  while(j < 2){
//     let a = prompt("Один із останніх вашиї переглянутих фільмів?",''),
//         b = prompt("Оцініь його",'');
//         if( a!= null && b != null && a != '' && b!= '' && a.length <50){
//             personalMovieDB.movies[a] = b;
//             console.log("done");
//         } else{
//             console.log('error');
//             j--;
//         }
//     j++;
//  }

 do{
    let a = prompt("Один із останніх вашиї переглянутих фільмів?",''),
            b = prompt("Оцініь його",'');
            if( a!= null && b != null && a != '' && b!= '' && a.length <50){
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else{
                console.log('error');
                j--;
            }
        j++;
 }while( j < 2);


console.log(personalMovieDB);
// if(personalMovieDB.count < 10) {
//     console.log("Доволі мало фільмів");
// }
// else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {

//     console.log("Ви класический глядач");
// }
// else if (personalMovieDB.count >= 30) {
//     console.log("Ви кіноман");
// }
// else {
//     console.log("ERROR");
// }
// let a = prompt("Один із останніх вашиї переглянутих фільмів?",''),
//     b = prompt("Оцініь його",'');
//     // c = prompt("Один із останніх вашиї переглянутих фільмів?",''),
//     // d = prompt("Оцініь його",'');


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB)

// let numbOfQuestions = +prompt("Скільки фільмів ви дивились?","");
// console.log(typeof(numbOfQuestions));
// console.log(numbOfQuestions);

// quetions:    for(let i=0; i< numbOfQuestions; i++){
//         let nameOfFilms = prompt("Введіть назву фільму","");
//         if(nameOfFilms == null || (nameOfFilms !== null && nameOfFilms.length > 50) || nameOfFilms == 0){
//             console.log("CRINGE");
//             i = -1;
//             console.log(i);
//             continue quetions; 
//         }
//         console.log("les go");
        
//     }
