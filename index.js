const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");




function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function saveName(name){
    localStorage.setItem("user", name);
}


function askName(){
    form.addEventListener("submit", handleSubmit);
    console.log("askName");
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    setItem(currentValue);
    saveName(currentValue);

}



function setItem(userName) {
    greetings.innerText = `Hello ${userName}`;
    greetings.classList.add("showing");
    input.classList.add("disappear");
}


function checkItem() {
    const userName = localStorage.getItem("user");
    if(userName) { //있으면
        setItem(userName);
    } else { //없으면 
        askName();
        console.log("not");
    }
}





function init() {
    checkItem();
  getTime();
  setInterval(getTime, 1000);
}

init();
