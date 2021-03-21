const toDoListForm = document.querySelector(".js-toDoList-form");
const toDoListInput = toDoListForm.querySelector("input");
const toDoListUi = document.querySelector(".js-toDoList-ui");




function makeList(currentText){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = currentText;
    delBtn.innerText = "delete";
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoListUi.appendChild(li);

}

function handleSubmit(event) {
    event.preventDefault();
    const currentText = toDoListInput.value;
    makeList(currentText);
    toDoListInput.value = "";
}

function toDoList() {
    toDoListForm.addEventListener("submit",handleSubmit);
}

function init() {
    toDoList();
}

init();