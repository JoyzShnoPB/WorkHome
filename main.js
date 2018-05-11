const SUCCESS_CLASS_NAME = "success";
const ERROR_CLASS_NAME = "error";
const ENTER_CHAR_CODE = 13;

function main() {
    const input = document.getElementById("input");
    const button = document.getElementById("button");
    const message = document.getElementById("message");

    function submit() {
        const value = input.value;
        const isValid = isEmailValid(value);
        message.className = isValid ? SUCCESS_CLASS_NAME : ERROR_CLASS_NAME;
        message.innerHTML = isValid ? "Email is OK" : "Email is WRONG";
    }

    button.addEventListener("click", function(event) {
        submit();
    });

    input.addEventListener("keypress", function(event) {
        if (event.charCode === ENTER_CHAR_CODE) {
            submit();
        }
    });
}

window.onload = function() {
    main();
};
