// chapter 35-38 

// task 1

// function date(){
//     var now = new Date();
//     alert(now);
// }
// date();

// task 2

// function fullName(){
//     var firstName = prompt();
//     var lastname = prompt();

//     var fName = firstName +" "+ lastname;
//     alert(fName);

// }
// fullName();

// task 3

// function sum (){
//     var firstNum = +prompt("Enter first number");
//     var secNum = +prompt("Enter sec number");

//     var sumNum = firstNum + secNum;
//     alert(sumNum);

// }
// sum ();

// task 4

function Calculater(num1, num2, ope) {


    if (ope === "+") {
        var sum = num1 + num2
        document.write("Addition of two value " + sum);
    }

    else if (ope === "-") {
        var sub = num1 - num2
        document.write("Subtraction of two value " + sub);
    }

    else if (ope === "/") {
        var div = num1 / num2
        document.write("Division of two value " + div);
    }

    else if (ope === "x") {
        var multi = num1 * num2
        document.write("Multiplication of two value " + multi);
    } else {
        alert("please enter operater")
    }



}
var no1 = +prompt("Enter First Value :");
var no2 = +prompt("Enter second Value :");
var opt = prompt("Enter operater + , - , x , / :");

Calculater(no1, no2, opt);

// task 5


