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

// function Calculater(num1, num2, ope) {


//     if (ope === "+") {
//         var sum = num1 + num2
//         return "Addition of two value " + sum;
//     }

//     else if (ope === "-") {
//         var sub = num1 - num2
//         document.write("Subtraction of two value " + sub);
//     }

//     else if (ope === "/") {
//         var div = num1 / num2
//         document.write("Division of two value " + div);
//     }

//     else if (ope === "x") {
//         var multi = num1 * num2
//         document.write("Multiplication of two value " + multi);
//     } else {
//         alert("please enter operater");
//     }



// }
// var no1 = +prompt("Enter First Value :");
// var no2 = +prompt("Enter second Value :");
// var opt = prompt("Enter operater + , - , x , / :");

// Calculater(no1, no2, opt);

// task 5

// function squNum(sqNum1){
//     var sqNum1 = +prompt("Enter number the squar find it :");

//     var findNum = sqNum1 * sqNum1
//     document.write("Reminder of two number is :" + findNum);

// }
// squNum();

// task 6

// switch statment 
// var programming = prompt("Enter Programming :").toLowerCase();

// switch (programming) {
//     case "html":
//         alert("you'r can hack NASA");
//         break;
//     case "css":
//         alert("you'r can hack Tesla");
//         break;
//     case "javascript":
//         alert("you'r can hack Everything");
//         break;
//         default:
//             alert("you can hack anything");

// }

// hoisting 
// ya sirf var or function k keyword sy bny hoy function k lia use hota hoy
// hota ya hy k var or function ko kahi bhi call kar sakty hn

var  date = new Date().toString();
console.log(date);

console.log(date.slice(date.indexOf(" ")+13,date.indexOf("GMT")-1))




