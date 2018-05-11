



let text = "some";

function call (text) {

    alert(text);
};

/*function cbcb (call) {
    call("sd");
    // console.log(call);
};*/

let homeWork = document.getElementById("hw");

homeWork.addEventListener ("click", function(){
    call(text);
});

// function blabla () - это объявление функции
// blabla() - это её вызов
// blabla - как аргумент