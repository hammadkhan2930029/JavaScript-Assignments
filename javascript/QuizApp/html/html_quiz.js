var quiz_obj = [
    // HTML5 Quiz Object
    [
        {
            question: "Q no 1 : What do you understand by HTML?",
            opt1: "HTML describes the structure of a webpage",
            opt2: "HTML is the standard markup language mainly used to create web pages",
            opt3: "HTML consists of a set of elements that helps the browser how to view the content",
            opt4: "All of the above",
            answer: "answer4",
        },
        {
            question: "Q no 2 : Who is the father of HTML?",
            opt1: "Rasmus Lerdorf",
            opt2: "Tim Berners-Lee",
            opt3: "Brendan Eich",
            opt4: "Sergey Brin",
            answer: "answer2",
        },
        {
            question: "Q no 3 : HTML stands for ___",
            opt1: "HyperText Markup Language",
            opt2: "HyperText Machine Language",
            opt3: "HyperText Marking Language",
            opt4: "HighText Marking Language",
            answer: "answer1",
        },
        {
            question: "Q no 4 : Which is used to read an HTML page and render it?",
            opt1: "Web server",
            opt2: "Web network",
            opt3: "Web browser",
            opt4: "Web matrix",
            answer: "answer3",
        },
        {
            question: "Q no 5 : Which tag is used for inserting the largest heading in HTML?",
            opt1: "head",
            opt2: "h1",
            opt3: "h6",
            opt4: "heading",
            answer: "answer2",
        },
        {
            question: "Q no 6 : Which is used to create Web Pages ?",
            opt1: "C++",
            opt2: "Java",
            opt3: "HTML",
            opt4: "JVM",
            answer: "answer3",
        },
        {
            question: "Q no 7 : HTML is a set of markup ___.",
            opt1: "tags",
            opt2: "sets",
            opt3: "attributes",
            opt4: "none of the above",
            answer: "answer1",
        },
        {
            question: "Q no 8 : HTML tags are used to describe document ___.",
            opt1: "definition",
            opt2: "content",
            opt3: "language",
            opt4: "model",
            answer: "answer2",
        },
        {
            question: "Q no 9 : HTML program is saved using ___ extension.",
            opt1: ".htmn",
            opt2: ".html",
            opt3: ".htnl",
            opt4: ".htxl",
            answer: "answer2",
        },
        {
            question: "Q no 10 : HTML program can be read and rendered by ___.",
            opt1: "Compiler",
            opt2: "Server",
            opt3: "Web Browser",
            opt4: "Interpreter",
            answer: "answer3",
        }
    ],
]

var queation_opt = document.getElementById("queation_opt");
var queation = document.getElementById("queation");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var myAnswer = document.querySelectorAll(".ans_input");
var submit = document.querySelector("#submit");
var scoreboard = document.querySelector("#scoreboard");

var score = 0;
var count = 0;

function questionload() {
    var countvalue = quiz_obj[0][count];
    // console.log(countvalue)
    queation.innerHTML = countvalue.question;
    option1.innerHTML = countvalue.opt1;
    option2.innerHTML = countvalue.opt2;
    option3.innerHTML = countvalue.opt3;
    option4.innerHTML = countvalue.opt4;

}
questionload();

function queation_uploade() {
    questionload();
    count++;



}

function getAnswer() {
    var ans;
    for (i = 0; i < myAnswer.length; i++) {
        if (myAnswer[i].checked) {
            ans = myAnswer[i].id
        }
    }
    return ans;
}

function deselect() {
    var ans;
    for (i = 0; i < myAnswer.length; i++) {
        myAnswer[i].checked = false;

    }

}
submit.addEventListener("click", () => {
    var getCheckAns = getAnswer();

    if (getCheckAns === quiz_obj[0][count].answer) {
        score++
        console.log(score);

    } else {
        console.log(score);

    }
    count++
    if (count < quiz_obj.length) {
        questionload();
        deselect();

    }
    else if (score => 10) {
        scoreboard.innerHTML = (

            `
            <h3>You Scored ${score} / ${quiz_obj.length}  </h3>
            <p classs="succes">You are Great 🏆</p>
            <button class="btn" onclick ="location.reload()";>Play Again</button>
            <button class="btn" onclick ="location.href='answer.html'";>check Answers</button>
            `
        )
        scoreboard.classList.remove('score_board');
        scoreboard.classList.add('btn');
        submit.classList.add('none')
    }
    else {
        scoreboard.innerHTML = (

            `
            <h3>You Scored ${score} / ${quiz_obj.length}  </h3>
            <p class="fail">You are fail 😞</p>
            <button class="btn" onclick ="location.reload()";>Play Again</button>
            <button class="btn" onclick ="location.href='answer.html'";>check Answers</button>
            `
        )
        scoreboard.classList.remove('score_board');
        scoreboard.classList.add('btn');
        submit.classList.add('none')

    }

})


