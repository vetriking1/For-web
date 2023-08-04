const Username = document.getElementById("U");
const SHowname = document.getElementById("userName")
const button = document.getElementById("btn")
function onclick(){
    console.log(Username.value)
    SHowname.innerText = "Thanks for visiting this page  " + Username.value
}
button.addEventListener('click',onclick)
