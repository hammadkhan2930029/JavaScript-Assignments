// ----------sign in------------

var firstLastName = document.getElementById("firstLastName").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;


window.localStorage.setItem("email", email);
window.localStorage.setItem("password", password);



function signIn() {

    window.location.href = "login.html";
   


}


function logIn() {
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    var email2 = localStorage.getItem("email");
    var password2 = localStorage.getItem("password");
    if (email1 === email2 && password1 === password2) {
        window.location.href = "../html/html_quiz.html";
    } else {
        alert("sign up first")
    }
}


