// chapter 21-25
// task 1

// var firstName = prompt("Enter First Name:");
// var lastName = prompt("Enter First Name:");

// var fullName= firstName +" "+ lastName

// alert(fullName);

// task 2

// var userMobile = prompt("What's your fav mobile:");
// var mob ="My Fav mobile is : " + userMobile
// var lenghtSize = "Lenght Size is : " + userMobile.length

// alert(mob +"\n" +lenghtSize);

// task 3
 
// var country = "pakistani";
// var update = country.indexOf("n");
// alert(country +"\n" + "lenght of n is " + update);

// task 4

// var a = "hello world";
// var update = a.lastIndexOf("d");
// console.log(update);

// task 5

// var name = "pakistani";
// var charName = name.charAt(3);
// alert("String :"+name+"\n character at index 3 :"+ charName);

// task 6

// var firstname = prompt("Enter first Name:");
// var lastName = prompt("Enter last Name :");
// alert(firstname+" "+lastName);

// task 7

// var city = "hyderabad";
// var updateCity = city.replace("hyderabad" , "Islamabad");
// alert("City :"+ city +"\n replace City :"+ updateCity);


// task 8

// var message = "Ali and Sami are best friends. They play cricket and football together";
// var UpdateMsg = message.replace(/and/g,"&");

// alert("Message :"+message+"\n \n Update msg :"+UpdateMsg);

// task 9

// var stringNum = "472";
// var noOfString = +stringNum
 
// document.write("Value :"+stringNum + "<br> type :" + typeof(stringNum) +"<br>" );
// document.write("Value :"+stringNum + "<br> type :" + typeof(noOfString) );

// task 10

// var user = prompt("Enter name :");
// var uperCase = user.toUpperCase();
// document.write("user Inpute : " + user +"<br>Uper case : "+ uperCase);

// task 11

// var userInput = prompt("Enter JS ful name :");

// userInput = userInput.split("");
// for(var i=0; i < userInput.length(); i++){
//     userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1) + " ";
//     document.write(userInput);
// }

// task 12

var num = 35.86;
var num2 = " " + num
var updateNum = num2.replace(".","");
console.log(updateNum)


// task 18

// var str = "the quick brown fox jumps over the lazy dog";
// console.log(str.split("the").join("hammad"));



// task 14

// var foodItems = ["pizza", "biryani", "korma", "nehari", "burger", "karahi"];
// var search = prompt("Enetr food name :");
// var value = "nahi"

// for (var i = 0; i < foodItems.length; i++) {
//     if (search === foodItems[i]) {
//         document.write("<h1>" + (i + 1) + ")" + foodItems[i] + " is available </h1>");
//         value = "han"
//         break;
//     }

// }
// if (value === "nahi") {
//     document.write("<h1>" + search + " is not available");


// }

// task 14


// var foods = ["tikka", "beef boti", "beef burger", "zinger burger", "zingerRoll"];
// var extraFood = ["cold drink", "chai"];
// var flag = "nahi"
// var user = prompt("Enter food name:");


// for (var i = 0; i < foods.length; i++) {
//     if (user === foods[i]) {
//         document.write(foods[i] + " avalabe")
//         flag = "han"
        

//         for (j = 0; j < extraFood.length; j++) {
//             document.write(extraFood[j] + " also avalabe")

//         }
//     }
//     else if(user === ""){
//         alert("please render food")
//     }
// }

// if (flag === "nahi") {
//     document.write("not availabe but");
//     for (j = 0; j < extraFood.length; j++) {
//         document.write(extraFood[j] + " also avalabe")

//     }
// }

// for (var i = 0; i < foods.length; i++) {

//     if (user === foods[i]) {
//         console.log(foods[i] + " avalabe")
//         flag = "han"
//     }
// }

// if (flag === "nahi") {
//     console.log("Not avaiable but");
//     consolelog("you can try this <br>");
//     for (j = 0; j < extraFood.length; j++) {
//         console.log(extraFood[j])

//     }
// }








