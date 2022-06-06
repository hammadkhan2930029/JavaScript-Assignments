// chapter 18 for loops
//   initialize , condition ,increment/decrement 
// for(var i =0; i < 10; i++){
//     console.log(i);

// }

// var table =+prompt("enter table no");

// for(var i=1; i<=10; i++)
// {
//     console.log(table * i);

// }

// flags condition 

// var cities = ["karachi", "islamabad", "lahor", "multan"];

// var city = prompt("Enter City name");
// var flags = "no"

// for (var i = 0; i < cities.length; i++) {
//     // console.log(cities[i])
//     if (cities[i] === city) {
        
//         flags = "no"

//         break;
//     }
  


// }

// if (flags==="no") {
//     alert("not found")


// }
// str = prompt("Enter a string")
// var len = str.length/2;
// console.log(len)
// for(var i=0; i<len; i++){
//     if(i<str[len-1-i]){
//          console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }
//  var compare=prompt("ENter value");
//  for(var i=0;i<=compare.length;i--){
// console.log(compare[i]);
//  }
//  if(promt===compare[i]){
// console.log("It is paradigm value")
//  }
//  else{
//      console.log("it is no");
//  }



// var str = prompt("Enter a string : ")
// for(i=0;i<str.length;i++){
//     if(str[i]===str[i-1]){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
// }

// palindrom without any methode 

var user =prompt("Enter text");
var flag="";

for(var i=user.length-1; i >=0; i--){
        flag +=user[i]
}

if(flag===user){
    alert("palindrome");
}
else{
    alert("not a palindrom");
}
 