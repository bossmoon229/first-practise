/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно */
"use strict";

// let numberOfFilms = +prompt("Скільки фільмів ви вже подивились?",'');

function start(){
    numberOfFilms = +prompt("Скільки фільмів ви вже подивились?",'');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів ви вже подивились?",'');
    }
}

// start();

const personalMovieDB = {
    // count: numberOfFilms,
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

// showMyDB();

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

// writeYourGenres();

function rememberFilms(){
    for(let i = 0; i < 2; i++){
        let a = prompt("Один із останніх вашиї переглянутих фільмів?",'').trim(),
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

console.log(personalMovieDB);

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

// let a = 8/4;
// let b = 13/4;
// // console.log(parseInt(a));
// // console.log(parseInt(b));
// console.log(a);
// console.log(parseInt(b+1));
// console.log(a === parseInt(a));

function calculateVolumeAndArea(numb) {
    if(isNaN(numb) || numb < 0 || !(numb=== parseInt(numb))){
        console.log("При вычислении произошла ошибка");
    }
    else{
        
   return (`Объем куба: ${numb * numb * numb}, площадь всей поверхности: ${6 * numb*numb}`);
    }
}
function getCoupeNumber(numb) {
    if(isNaN(numb) || !(numb === parseInt(numb)) || numb < 0){
        console.log( "Ошибка. Проверьте правильность введенного номера места");
    }
    else if(numb == 0 || numb > 36){
        console.log( "Таких мест в вагоне не существует");
    }
    else if(numb % 4 === 0){
        console.log( numb/4);
    }
    else{
    }
    
}
// console.log(2 + 'fdsf');

function fib(numb) {
    if(numb <= 0 || typeof(numb)!== 'number' || isNaN(numb))return "";
    if(numb == 1)return "0";
    let numb1 = 0;
    let numb2 = 1;
    let res;
    let result = "0 1"
    for(let i = 2; i < numb; i++){
        res = numb1 + numb2;
        numb1 = numb2;
        numb2 = res;
        result+=" "+res;
        // console.log(result);
    }
    return result;
}
// fib(3.3);
// getCoupeNumber(12);


