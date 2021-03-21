const toDoListForm = document.querySelector(".js-toDoList-form");
const toDoListInput = toDoListForm.querySelector("input");
const toDoListUi = document.querySelector(".js-toDoList-ui");

let toDoArray = [];

function makeList(currentText) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = currentText;
  delBtn.innerText = "delete";
  delBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoListUi.appendChild(li);
  toDoObj = {
    text: currentText,
    id: toDoArray.length + 1,
  };
  li.id = toDoArray.length + 1;
  toDoArray.push(toDoObj);
  localStorage.setItem("toDo", JSON.stringify(toDoArray));
}

function handleSubmit(event) {
  event.preventDefault();
  const currentText = toDoListInput.value;
  makeList(currentText);
  toDoListInput.value = "";
}

function loadToDo() {
  const getToDo = localStorage.getItem("toDo");
  if (getToDo !== null) {
    const parseToDo = JSON.parse(getToDo);
    parseToDo.forEach(function (toDo) {
      makeList(toDo.text);
    });
  }
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  toDoListUi.removeChild(li);
  const cleanToDoArray = toDoArray.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDoArray = cleanToDoArray;
  localStorage.setItem("toDo", JSON.stringify(toDoArray));
}
function toDoList() {
  loadToDo();
  toDoListForm.addEventListener("submit", handleSubmit);
}

function init() {
  toDoList();
}

init();
