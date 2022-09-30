let userName = document.querySelector("#userName")
let headerText = document.querySelector("#headerText")
let subBox = document.querySelector("#subBox")
let Quiz = document.querySelector("#Quiz")
let Q1Button = document.querySelector("#Q1Button")
let Q2Button = document.querySelector("#Q2Button")
let Q3Button = document.querySelector("#Q3Button")
let Question = document.querySelector("#Question")
let A1 = document.querySelector("#A1")
let A2 = document.querySelector("#A2")
let A3 = document.querySelector("#A3")
let A4 = document.querySelector("#A4")
let iterationNumber = 0;
let qnChoice = "";
let score = 0;

let questionList = [
    "Qn1: What was Frank's nickname at his old company?", 
    "Qn2: What is Dee's nickname given to her, by the gang?",
    "Qn3: In the episode where charlie goes on a date and sweats because he ate too much cheese, what does he try to say his job is?"
]

let aAnswerList = ["Frankfurt", "Bird", "Janitor" ]
let bAnswerList = ["shortround", "Denise", "sugar daddy" ]
let cAnswerList = ["the thumb", "Deecakes", "Philanthropist" ]
let dAnswerList = ["Wharthog", "The industructable Dee", "Software developer" ]

Quiz.style.display = "none";
Q1Button.style.display = "none";
Q2Button.style.display = "none";
Q3Button.style.display = "none";


function greeting(){
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", Welcome to Kellys Pub!"
    subBox.style.display = "none"
    Quiz.style.display = "block";
    Q1Button.style.display = "block";
    Question.innerHTML = questionList[iterationNumber];
    A1.innerHTML = aAnswerList[iterationNumber];
    A2.innerHTML = bAnswerList[iterationNumber];
    A3.innerHTML = cAnswerList[iterationNumber];
    A4.innerHTML = dAnswerList[iterationNumber];
}

function aFunction(){
    A1.style.color = "red";
    A2.style.color = "white";
    A3.style.color = "White";
    A4.style.color = "White";
    qnChoice = "a"  

}
function bFunction(){
    A1.style.color = "White";
    A2.style.color = "Red";
    A3.style.color = "White";
    A4.style.color = "White"; 
    qnChoice = "b"
    
}
function cFunction(){
    A1.style.color = "White";
    A2.style.color = "White";
    A3.style.color = "Red";
    A4.style.color = "White"; 
    qnChoice = "c"
    
}
function dFunction(){
    A1.style.color = "White";
    A2.style.color = "white";
    A3.style.color = "White";
    A4.style.color = "Red"; 
    qnChoice = "d"
}
function submitQn1(){
    if (qnChoice == "d"){
        score = score + 1;
    }
    Q1Button.style.display = "none";
    Q2Button.style.display = "block";
    iterationNumber += 1;

    
    A1.style.color = "White";
    A2.style.color = "white";
    A3.style.color = "White";
    A4.style.color = "White";

Question.innerHTML = questionList[iterationNumber];
    A1.innerHTML = aAnswerList[iterationNumber];
    A2.innerHTML = bAnswerList[iterationNumber];
    A3.innerHTML = cAnswerList[iterationNumber];
    A4.innerHTML = dAnswerList[iterationNumber];
}

function submitQn2(){
    if (qnChoice == "a"){
        score = score + 1;
    }
    iterationNumber += 1;
   
    Q2Button.style.display = "none";
    Q3Button.style.display = "block";
    A1.style.color = "White";
    A2.style.color = "white";
    A3.style.color = "White";
    A4.style.color = "White";
    Question.innerHTML = questionList[iterationNumber];
    A1.innerHTML = aAnswerList[iterationNumber];
    A2.innerHTML = bAnswerList[iterationNumber];
    A3.innerHTML = cAnswerList[iterationNumber];
    A4.innerHTML = dAnswerList[iterationNumber];
}

function submitQn3(){
    if (qnChoice == "c"){
        score = score + 1;
    }
    iterationNumber += 1;
    headerText.innerHTML = "Your score is " + score;
    Quiz.style.display = "none";

    A1.style.color = "White";
    A2.style.color = "white";
    A3.style.color = "White";
    A4.style.color = "White";

     Question.innerHTML = questionList[iterationNumber];
    A1.innerHTML = aAnswerList[iterationNumber];
    A2.innerHTML = bAnswerList[iterationNumber];
    A3.innerHTML = cAnswerList[iterationNumber];
    A4.innerHTML = dAnswerList[iterationNumber];
}