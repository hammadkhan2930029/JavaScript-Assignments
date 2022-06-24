// head and tails 


var userName = prompt("enter name :");
var userInput = prompt("Enter H/T:").toUpperCase();
var arr = ["H", "T"]
var randomNum = arr[Math.floor(Math.random() * arr.length)]
// (arr[randomNum]);

if (userInput === randomNum) {
    alert(userName + " win");
} else {
    alert(userName + " lost");

}
document.write(`<h2>
        <a href="../index.html"> Back to home</a>

    </h2>`)