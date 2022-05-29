// // // // chapter 9-11
// // // // task 1

// var cityName=prompt("Enter City Name:")

// if(cityName==="karachi"){
//     alert("Welcome to City of Light's ")
// }
// else{
//     alert("hay your not from Karachi ")
// }

// // task 2

// var gender=prompt("Enter Your gender");

// if (gender ==="male"){
//     alert("hello Sir")
// }
// else if(gender === "female"){
//     alert("hello Maam")
// }
// else{
//     alert("Hello bilawal")
// }

// // // task 3

// var signalColor=prompt("enter Signal Color:")

// if(signalColor==="red" || signalColor==="Red"){
//     document.write(`<table> 
//     <tr>
//     <th>Signal Color</th>
//     <th>Message</th>

//     </tr>)
//     <tr class="red">
//      <td>${signalColor}</td>
//      <td>Must Stop</td>

//     </tr>
    
//     </table>`)
    

// }
// else if(signalColor==="yellow" || signalColor==="Yellow"){
//     document.write(`<table> 
//     <tr>
//     <th>Signal Color</th>
//     <th>Message</th>

//     </tr>)
//     <tr class="yellow">
//      <td>${signalColor}</td>
//      <td>Ready to move</td>

//     </tr>
    
//     </table>`)


// }
// else if(signalColor==="green" || signalColor==="Green"){
//     document.write(`<table> 
//     <tr>
//     <th>Signal Color</th>
//     <th>Message</th>

//     </tr>)
//     <tr class="green">
//      <td>${signalColor}</td>
//      <td>Move now</td>

//     </tr>
    
//     </table>`)


// }
// else{
//     alert("Invalid input")
// }


// document.write(
//     `<style>
    
//     table{
//         border:1px solid red;
//         padding:5px;
//         width:60%;
//         border-collapse: collapse;
//         text-align:center;
//         margin:20px auto;
//     }
//     th{
//         font-wight:bold;
//         font-size:24px;
//         padding:5px;
        

//     }
//     td{
//         font-size:18px;
        
//         padding:10px;
//     }
//     .green{
//         background-color:green;
//         color

//     }
//     .yellow{
//         background-color:yellow;
        

//     }
//     .red{
//         background-color:red;

//     }
    
//     </style>`
// )

// task 3

// var inputFuel=+prompt("Bhai kitna Fuel Bacha hay?")

// if(inputFuel < 0.25){
//     alert("Bhai Fuel bharwa lo jaldi")
// }
// else{
//     alert("Chalo kuch dair bad bharwa lena")
// }

// task 4

// var a=4;
// if(++a === 5){
//     alert("given Condition for variable a is true");
// }

// var b=82;
// if(b++ === 83){
//     alert("given Condition for variable b is true");


// }
// var c=12;
// if(c++ === 13){
//     alert("Condition 1 is true");


// }
// if(c === 13){
//     alert("Condition 2 is ture");
// }
// if(++c < 14){
//     alert("Condition 3 is ture");

// }
// if(c === 14){
//     alert("Condition 4 is ture");

// }

// var materialCost=20000;
// var laborCost=2000;
// var totalCost=laborCost+materialCost;
// if(totalCost === laborCost + materialCost){
//     alert("The cost equals")
// }

// if(true){
//     alert("true");
// }
// if(false){
//     alert("false");
//     console.log("false")
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// console.log("car is smaller than cat")
// }

// task 6

// var obtaindMarks1=+prompt("Enter your first Subject obtaind Mark:");
// var obtaindMarks2=+prompt("Enter your first Subject obtaind Mark:");
// var obtaindMarks3=+prompt("Enter your first Subject obtaind Mark:");
// var totalMarks=300;
// var totalObtaindMark=obtaindMarks1 + obtaindMarks2 +obtaindMarks3;
// var percentage=totalMarks/totalObtaindMark*100;

// if(percentage === 80 || percentage > 80){
//     document.write("<h1> Mark sheet </h1><br>"+
//     "total mark :" +totalMarks +"<br>" +"Marks Obtaind:"+ totalObtaindMark+
//     "<br>"+"percentage:"+percentage+"%"+"<br>"+"grade:A-one"+"<br> Remarks:Exellent")
// }

// if(percentage === 60 || percentage > 60){
//     document.write("<h1> Mark sheet </h1><br>"+
//     "total mark :" +totalMarks +"<br>" +"Marks Obtaind:"+ totalObtaindMark+
//     "<br>"+"percentage:"+percentage+"%"+"<br>"+"grade: B"+"<br> Remarks:You Need improve")
// }
// else{
//     alert("sorry")
// }

// task 10

var temp=+prompt("Enter temperatur:")

if(temp > 40 || temp===40){
    alert("it's To hot Out Side");
}
if(temp > 30 || temp===30){
    alert("The Weather Today is normal");
}
if(temp > 20 || temp===20){
    alert("today's weather is Cool");
}
if(temp > 10 || temp===10){
    alert("OMG! today's weather is So Cool");
}
else{
    alert("Ooooohhh Innni thaand")
}

// task 11
// // Calculater

var num1 = +prompt("Enter a number");
var num2 = +prompt("Enter a number ");
var opt = prompt("Enter your operator");

if (opt==="+"){
    var result = num1+num2;
    // document.write("addition of two number is : " + result);
    alert("addition of two number is : " + result)
    // document.write("Addition");
    console.log("Addition");

}

if (opt==="-"){
    var result = num1-num2;
    // document.write("subtraction of two number is : " + result);
    alert("subtraction of two number is : " + result)

    // document.write("subtraction");


}

if (opt==="*"){
    var result = num1*num2;
    // document.write("multiplication of two number is : " + result);
    alert("multiplication of two number is : " + result)
    // document.write("Mul");


}

if (opt==="/"){
    var result = num1/num2;
    // document.write("division of two number is : " + result);
    alert("division of two number is : " + result)
    // document.write("Div");



}









    

