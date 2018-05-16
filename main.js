const SUCCESS_CLASS_NAME = "success";
const ERROR_CLASS_NAME = "error";
const ENTER_CHAR_CODE = 13;
const users = [
    {
        email: "petro@gmail.com",
        password: 123456
    },
    {
        email: "vasya@gmail.com",
        password: 134567
    }
];
const input = document.getElementById("input");
const button = document.getElementById("button");
const message = document.getElementById("message");
const password = document.getElementById("password");
const tabs = document.getElementById("tabs");
const login = document.getElementById("login");
const registation = document.getElementById("registation");

const passValue = password.value;

console.dir(tabs);

function main() {
    function choose () {
        const role = click.target.dataset.role;
        
    }
    
    
    function submit() {
        let emailValue = input.value;
        const isValid = isEmailValid(emailValue);
        console.log(emailValue);
        message.className = isValid ? SUCCESS_CLASS_NAME : ERROR_CLASS_NAME;
        message.innerHTML = isValid ? "Succes" : "Try another one. And another one";
            if (isValid) { users.push({
                email: emailValue,
                password: passValue
            });
        if (isEmailTaken) {
            message.className = ERROR_CLASS_NAME;
            message.innerHTML = "Email is taken. Try another one";
        }
    }}

    button.addEventListener("click", function() {
        submit();
    });

    // password.addEventListener("keypress", function(event) {
    //     if (event.charCode === ENTER_CHAR_CODE) {
    //         submit();
    //     }
    // }
}

window.onload = function() {
    main();
};

function activateTabs() { // фун-ция, которая активирует наши табы
    const tabsElement = document.getElementById("tabs"); // даем js-у доступ к этому div-у

    tabsElement.addEventListener("click", function(event) { // вешаем событие на этот div
        console.log(event);
        const role = event.target.dataset.role; // event.target - выделяет элемент, на котором произошло событие. 
        //в целом же - мы отслеживаем (?) элемент, который имеет dataset.role 
        if (role) { // если отследили
            const contentElements = document.querySelectorAll(".content"); // возвращает массив, в котором
            // перечень классов .content
            contentElements.forEach(function a(element) { //перебираем этот массив классов через foreach,
                //коорый обрабатывает каждый элемент функцией а
                console.log("class", element.className); // присваиваем ему className (которого )
            });
        }
    });

} 