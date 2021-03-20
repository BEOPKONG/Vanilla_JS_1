const title = document.querySelector(".btn");
const CLICKED = "clicked";


function handleClick() {
    title.classList.toggle(CLICKED);
}




function init() {
    title.addEventListener("click", handleClick);
}

init();


