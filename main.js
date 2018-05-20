const SUCCESS_CLASS_NAME = "success";
const ERROR_CLASS_NAME = "error";
const ENTER_CHAR_CODE = 13;

const users = [
    {
        email: "john@gmail.com",
        password: "123456"
    },
    {
        email: "vasyl@gmail.com",
        password: "test"
    },
    {
        email: "petro@gmail.com",
        password: "111111"
    }
];

function activateTabs() {
    const tabsElement = document.getElementById("tabs");

    tabsElement.addEventListener("click", function(event) {
        const role = event.target.dataset.role;
        console.log(event);
        if (role) {
            const contentElements = document.querySelectorAll(".content");
            contentElements.forEach(function(element) {
                element.classList.remove("show");
                if (element.id === role) {
                    element.classList.add("show");
                }
            });

            const tabsElements = document.querySelectorAll(".tab");
            tabsElements.forEach(function(element) {
                element.classList.remove("active");
                if ("tab-" + role === element.id) {
                    element.classList.add("active");
                }
            });
        }
    });

}

/**
 * 
 */
function login(email, password) {
    if (isUserExists(users, email, password)) {
        console.log("Welcome");
    }
    else {
        console.log("User is invalid");        
    }
}

function registration(email, password, passwordAgain) {
    if (!isEmailValid(email)) {
        console.log("Invalid email");
        return;
    }
    else if (isEmailTaken(users, email)) {
        console.log("Email is taken");
        return;
    }
    else if (password !== passwordAgain) {
        console.log("Password are different");
        return;
    }


    users.push({
        email: email,
        password: password
    });    
}

function setupForms() {
    const onSubmit = function(event) {
        event.preventDefault();
        event.stopPropagation();

        const action = event.target.id.replace(/^form-/, "");
        console.log("action", action);

        const email = event.target.querySelector("[name=login]").value;
        const password = event.target.querySelector("[name=password]").value;
        console.log(login, password);

        switch (action) {
        case "login":
            login(email, password);
            break;
        case "registration":
            const passwordAgain = event.target.querySelector("[name=passwordAgain]").value;
            registration(email, password, passwordAgain);
            break;
        default:
            break;
        }

        return false;
    };

    document.querySelectorAll(".form").forEach(function(element) {
        element.addEventListener("submit", onSubmit);
    });
}

function main() {
    activateTabs();
    setupForms();
    // dz1
 let dz = document.getElementById("dz");
 dz.addEventListener("click", function() {
    dz.style.margin = "10";
 })
    //dz2
    let array = [
        {
            loc: "element 1"
        },
        {
            loc: "element 2"
        },
        {
            loc: "element 3"
        }
    ];

    let dz2 = document.getElementById("dz2");
    dz2.addEventListener("click", function() {
        let bobo = event.target.innerText;
        let check = isLocExist(array, bobo);
        if (check) {
        console.log("u are welcome");
       } else {
        // console.dir(event.target.innerText);
        console.log(array); 
       array.push({
           loc: bobo
       });
       console.log(array);
       return;
    }
        
    })
    function isLocExist (array, loc) {
        return array.some(function(array) {
            return array.loc === loc; 
        });
    }
}

window.onload = function() {
    main();
};

