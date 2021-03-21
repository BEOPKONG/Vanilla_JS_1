const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

function getTime() {
  //clock
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function saveName(name) {
  localStorage.setItem("user", name);
}

function askName() {
  //없다면 submit event를 감지해서 handleSubmit()으로
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  //submit되면 기본적으로 새로고침되는걸 막고 값을 저장
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue); //input에 사용자가 타이핑한 값을 저장
  setItem();
}

function setItem() {
  //있다면 localstrage에 있는값을 greetings에 뿌려준다
  const userName = localStorage.getItem("user");
  greetings.innerText = `Hello ${userName}`;
  greetings.classList.add("showing");
  input.classList.add("disappear");
}

function checkItem() {
  //localstrange에 저장하기 예제
  const userName = localStorage.getItem("user");
  if (userName) {
    //있으면
    setItem();
  } else {
    //없으면
    askName();
  }
}

function init() {
  checkItem();
  getTime();
  setInterval(getTime, 1000);
}

init();
