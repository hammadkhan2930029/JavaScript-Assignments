// // chapetr 12-13
// // task 5

// var password =prompt("enter password");
// var userPassword = prompt("again Enter Password:");

// if (password === userPassword) {
    
//     alert("Correct! The password you enternd");
// }
// else if (password !== userPassword) {
//     alert("incorrect password");
// }
// else{
//     alert("enter password first")
// }

// // task 6

// var greeting;
// var hour=13;

// if(hour < 18){

// }


// task 7

var time=+prompt("Enter Time");

if(time >= 0000  && time < 1200){
    alert("Good Morning");
    console.log("good Morning")

}
else if(time >=1200 && time < 1700){
    alert("Good afternoon");
}
else if(time >= 1700 && time < 2100){
    alert("Good evening");
}
else if(time >= 2100 && time <= 2359){
    alert("Good Night");
}
else("who r u?")


