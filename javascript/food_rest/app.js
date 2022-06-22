var foods = ["tikka", "beef boti", "beef burger","biryani", "burger","cake","zinger burger", "gulab jamun","beef biryani",
"chicken biryani","beef pulao","zinger roll"];
var extraFood = ["cold drink", "chai"];
var flag = "nahi"
alert("Welcome to my Food restaurent");
var user = prompt("Enter food name:");
user = user.toLowerCase();


for (var i = 0; i < foods.length; i++) {
    if (user === foods[i]) {
        document.write("<b>"+ foods[i] +"</b>"+ " availabe<br>")
        flag = "han"
        

        for (j = 0; j < extraFood.length; j++) {
            document.write("<b>"+extraFood[j]+"</b>"+ " also availabe<br>")

        }
    
}   
else if(user === ""){
    alert("plz render food");
    break;
}
}


if (flag === "nahi") {
    document.write("not availabe but <br>");
    
    for (j = 0; j < extraFood.length; j++) {
        document.write("<b>"+extraFood[j]+"</b>" + " also availabe <br>")

    }
}


