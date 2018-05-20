function isEmailValid(email /* string */) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} /* boolean */

function getInput() {
    const input = prompt("Your email");
    return input;
} /* string */

function isEmailTaken (users, email) {
    return users.some(function(users) {
        return users.email === email; 
    });
}
function isUserExists(users, email, password) {
	return users.some(function(user) {
		return user.email.toLowerCase() === email.toLowerCase() && user.password === password;
	});
}