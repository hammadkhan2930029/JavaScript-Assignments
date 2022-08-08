
function playerOne(){
    swal("Forwerd : D \n Back : A \n Kick : S \n jump : W \n Power Move : F \n Second power Move : Space");
}
function playerTwo(){
    swal("Select your Player");
}


var character = document.getElementById("character");
var secondcharacter = document.getElementById("secondcharacter");


var count = 160;
var counting = 870;



window.onkeydown = function () {
    console.log(event.keyCode);
    // --------press A back---------
    if (event.keyCode === 65) {
        character.src = "che-run.gif";
        count = count - 10;
        character.style.left = count + "px";
        setTimeout(function () {
            character.src = "che-stand.gif";
        }, 200)
    }

    // -----press D forwerd----

    if (event.keyCode === 68) {
        character.src = "che-run-back.gif";
        count = count + 10
        console.log(count)
        
        character.style.left = count + "px";

        setTimeout(function () {
            character.src = "che-stand.gif";
        }, 200)
    }

    // -----press s kick-------

    if (event.keyCode === 83) {

        character.src = "che-kick.gif";

        setTimeout(function () {
            character.src = "che-stand.gif";
        }, 800)

    }

    // -------press W jump-------

    if (event.keyCode === 87) {

        character.src = "che-jump.gif";

        setTimeout(function () {
            character.src = "che-stand.gif";
        }, 800)

    }

     // -------press F pwerMove-------

     if (event.keyCode === 70) {

        character.src = "che-powerMove.gif";

        setTimeout(function () {
            character.src = "che-stand.gif";
        }, 1800)

    }
    // -------press space pwerMove2-------

    if (event.keyCode === 32) {

        character.src = "che-powerMove2.gif";

        setTimeout(function () {
            character.src = "che-stand.gif";
        }, 2700)

    }

    // -----------Character tow-----------

    if (event.keyCode === 39) {
        secondcharacter.src = "stand1.gif";
        counting = counting + 10;
        secondcharacter.style.left = counting + "px";
        setTimeout(function () {
            secondcharacter.src = "stand1.gif";
        }, 200)
    }
    if (event.keyCode === 37) {
        secondcharacter.src = "stand1.gif";
        counting = counting - 10;
        console.log(count)
        secondcharacter.style.left = counting + "px";

        setTimeout(function () {
            secondcharacter.src = "stand1.gif";
        }, 200)
    }
    // if (event.keyCode === 83) {

    //     character.src = "pic4.gif";

    //     setTimeout(function () {
    //         character.src = "pic1.gif";
    //     }, 800)

    // }

}



// windows function


// window.onload = function(){
//     console.log("onload")

// }
// window.onkeydown = function(){
//     console.log("onkeydown")
// }
// window.onblur = function(){
//     console.log("Offline")
// }
// window.onfocus = function(){
//     console.log("Online")
// }

// var count = 0;
// var timer = setInterval( function(){
//     count++
// console.log(count)
// },1000)

// setTimeout(function(){
//     clearInterval(timer)
// },5000)

// setTimeout(function(){
//     var timer = setInterval( function(){
//         count++
//     console.log(count)
//     },1000)


// },2000)

