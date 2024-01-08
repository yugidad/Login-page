const container = document.querySelector(".container");
const clickMain = document.querySelector(".click1");
const clickAgain = document.querySelector(".click2");


clickMain.addEventListener("click", () => {
    container.classList.add("active");
});
clickAgain.addEventListener("click", () => {
    container.classList.remove("active");
});
