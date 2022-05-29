// chapetr 12-13
// task 5

var password =prompt("enter password");
var userPassword = prompt("again Enter Password:");

if (password === userPassword) {
    
    alert("Correct! The password you enternd");
}
else if (password !== userPassword) {
    alert("incorrect password");
}
else{
    alert("enter password first")
}
