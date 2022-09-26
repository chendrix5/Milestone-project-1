let userName = document.querySelector("#userName")
let headerText = document.querySelector("#headerText")
let subBox = document.querySelector("#subBox")
let Quiz = document.querySelector("#Quiz")
let A1 = document.querySelector("#A1")
let A2 = document.querySelector("#A2")
let A3 = document.querySelector("#A3")
let A4 = document.querySelector("#A4")
let qnChoice = "";
let score = 0;

Quiz.style.display = "none";


function greeting(){
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", Welcome to Kellys Pub!"
    subBox.style.display = "none"
    Quiz.style.display = "block";
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
function submitQn1()
