let text = "some";

function call (text) {
    alert(text);
};

// let homeWork = document.getElementById("hw");
// homeWork.addEventListener ("click", function(){
//     call(text);
// });

// function blabla () - это объявление функции
// blabla() - это её вызов
// blabla - как аргумент

function Base () { // это и есть конструктор. Преднаначена для
    // "конструирования" объектов
    this.numbers = [];
};
Base.prototype = {
    addNumbers: function(number) {
        this.numbers[numbers.length] = number;
    }
}

const ele = new Base;

let homeWork = document.getElementById("hw");
homeWork.addEventListener ("click", function(){
    call(text);
});
// update - это прототип объекта Base

// Создать конструктор объекта. Добавить поле numbers. 
// Добавить метод в прототип addNumbers(number), 
// который будет добавлять полученный number в массив numbers.

// console.log(update);
