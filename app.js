const formEl = document.querySelector(".form")

const inputEl = document.querySelector(".input")

const ulEl = document.querySelector(".list")

formEl.addEventListener("submit", (event)=> {
    event.preventDefault();
    toDoList()
})

function toDoList(){
    let newTask = inputEl.value;
    const liEl = document.createElement("li")
    liEl.innerText = newTask;
    ulEl.appendChild(liEl)
    inputEl.value = ""
    const checkBtnEl = document.createElement("div")
    checkBtnEl.innerHTML = `
    <i class="fa-solid fa-square-check">
    `
    liEl.appendChild(checkBtnEl)
    const squareEl = document.createElement("div")
    squareEl.innerHTML = `<i class="fa-solid fa-trash"></i>`
    liEl.appendChild(squareEl)
    checkBtnEl.addEventListener("click" , () => {
        liEl.classList.toggle("checked")
    })

    squareEl.addEventListener("click", () => {
        liEl.remove()
        });
    updateLocalStorage()
}


    
function updateLocalStorage() {
    const liEls = document.querySelectorAll("li");
    const list = [];

    liEls.forEach(liEl => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        });
    });

    localStorage.setItem("list", JSON.stringify(list));
}
