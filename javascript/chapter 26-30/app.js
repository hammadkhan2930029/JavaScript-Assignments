// Chapter 26-30 

// task 1

var user = +prompt("Enter the positive Integer :");
var user1 = Math.round(user);
var user2 = Math.floor(user);
var user3 = Math.ceil(user);

document.write(`<h1>Task 1</h1><b>Number : ${user} <br> Round Of Value : 
${user1} <br> floor Value : ${user2} <br> Ceil Value : ${user3}</b>`);

// task 2

var user = +prompt("Enter the Negative Integer :");
var user1 = Math.round(user);
var user2 = Math.floor(user);
var user3 = Math.ceil(user);

document.write(`<h1>Task 1</h1><b>Number : ${user} <br> Round Of Value : 
${user1} <br> floor Value : ${user2} <br> Ceil Value : ${user3}</b>`);

// task 4

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);

document.write("<h2> Randome dice Value :" + numberOfStars + "</h2><br>");

// task 5


var arr = [1,2]
var randomNum = arr[Math.floor(Math.random() * arr.length)]


if (randomNum === 2) {

    document.write(`<h1>${randomNum}  <br>Random coin value Heads</h1>`);
     

}else if(randomNum === 1){
    document.write(`<h1>${randomNum} <br> Random coin value Tails</h1>`);
 }

//  task 8


var userInput = +prompt("Enter a number Between 1 and 10 :");

var secretNum = [4,8];

for(var i = 0; i < secretNum.length; i++){
    if(userInput === secretNum[i]){
    
        alert("Congratulation");
        break;
        
    }else{
        alert("please try again");
    }

}


