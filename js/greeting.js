const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault();  // preventDefault is a built-in function
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);  // to do: what is this?
    greeting.classList.add(SHOWING_CN);  // to do: what is this?
    greeting.innerText = `welcome, ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        // user exists
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
