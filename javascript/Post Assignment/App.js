var para = document.getElementById("para");
var textArea = document.getElementById("textarea");
var para2 = document.getElementById("para2");
var div2 = document.getElementById("div2");
var main1 = document.getElementById("main1")
var co = document.getElementById("co")


function post() {
    para2.innerHTML = textArea.value;
    div2.style.display = "block";
    main1.style.display = "none";



}
function comment() {
    co.style.display = "block"
}


function red() {
    para.style.backgroundColor = "red";
    para.style.color = "white";
}
function green() {
    para.style.backgroundColor = "green";
    para.style.color = "white";

}
function blue() {
    para.style.backgroundColor = "blue";
    para.style.color = "white";

}
function yellow() {
    para.style.backgroundColor = "yellow";
    para.style.color = "black";

}
var count = 0;
function like() {

    count++;

    var counter = document.getElementById('counter');
    counter.innerHTML = count;
}