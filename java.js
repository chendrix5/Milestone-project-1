let userName = document.querySelector("#userName")
let headerText = document.querySelector("#headerText")
let subBox = document.querySelector("#subBox")


function greeting(){
    headerText.innerHTML = ""
    headerText.innerHTML = "Hello " + userName.value + ", Welcome to Kellys Pub!"
    subBox.style.display = "none"
}