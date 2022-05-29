var html = prompt("Do you know about html?");
var css = prompt("Do you know about CSS?");
var JS = prompt("Do you know about JS?");
var experince = +prompt("How many years do you have experince in JS?");
var address = prompt("Do you live in karachi?")
var age = +prompt("Enter you age :")



if((html==="yes" || css==="yes")){
    if((JS=="yes") && (experince>=2)){
        if((address=="yes") && (age>=18)){
            alert("you are eligible")
        }
        else{
            alert("you are not from karachi or your age is not >18")   
        }
    }
    else{
        alert("you dnt know JS or no exp >2")
    }


 
}
else{
    alert("you are not eligible")
}



var html = prompt("Do you now Html: yes/no");
var css = prompt("Do you now css: yes/no");
var javaScript = prompt("Do you now JavaScript: yes/no");
var age = +prompt("Enter your age:");
var city = prompt("Enter your city:");

if((html=== "yes" || css=== "yes") && javaScript==="yes"){
    var exp = +prompt("Enter your exp:");
    if(exp >= 2){
        alert("Chalty raho ")
    }
    else(
        alert("bhai pahly exp lao")
    )
    alert("Sahi ja raha hay");
}
else(
    alert("bhai pahly Sekh kar aoo")
)




