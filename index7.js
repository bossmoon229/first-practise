/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */
"use strict";

let numberOfFilms = +prompt("Скільки фільмів ви вже подивились?",'');

function start(){
    numberOfFilms = +prompt("Скільки фільмів ви вже подивились?",'');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів ви вже подивились?",'');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// console.log(personalMovieDB.privat);


function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres(){
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
}

writeYourGenres();

function rememberFilms(){
    for(let i = 0; i < 2; i++){
        let a = prompt("Один із останніх вашиї переглянутих фільмів?",''),
            b = prompt("Оцініь його",'');
    
            if( a!= null && b != null && a != '' && b!= '' && a.length <50){
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else{
                console.log('error');
                i--;
            }
    }

}
// rememberFilms();


function detectPersonalLevel(){
    if(personalMovieDB.count < 10) {
        console.log("Доволі мало фільмів");
    }
    else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    
        console.log("Ви класический глядач");
    }
    else if (personalMovieDB.count >= 30) {
        console.log("Ви кіноман");
    }
    else {
        console.log("ERROR");
    }
    
}
// detectPersonalLevel();