// var name ="Muhammad hammad khan";
// var split = name.split(" ");
// var firstName = "";
// var lastName = "";

// for(var i = 0; i < split.lenght; i++){
//     if( i <= 1){
//         firstName += split[i] + " "

//     }else{
//         lastName += split[i] +" "
//     }
// }

// console.log(firstName);
// console.log(lastName);

var text =prompt("enter name");
var secName = prompt("second name");
    for (var i = 0; i < text.length; i++) {
 if (text.slice(i, i + text.length) === text) {
    text = text.slice(0, i) + secName + text.slice(i + secName.length);
    console.log(text);
    }
    }
